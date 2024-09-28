// Imports
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// The homepage
function Homepage() {
  const [list, setList] = useState([]);
  // Title state
  const [title, setTitle] = useState("");
  // Description state
  const [description, setDescription] = useState("");

  // Navigate
  const navigate = useNavigate();

  // Loads the list data when the page is first initialized
  useEffect(() => {
    fetchListData();
  }, []);

  // Fetches the list data from the database
  async function fetchListData() {
    // List data request
    const listRes = await fetch("http://localhost:5000/api/listitems", {
      credentials: "include",
    });

    // Converts request to JSON
    const listResData = await listRes.json();

    // Sets the list with the retrieved data
    setList(listResData);
  }

  // Handles the add list item event
  async function addListItem(event) {
    // Prevents page from reloading
    event.preventDefault();

    const newListItemInfo = {
      title,
      description,
    };

    // New list item fetch request
    await fetch("http://localhost:5000/api/listitems", {
      method: "POST",
      body: JSON.stringify(newListItemInfo),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    // Reloads list
    fetchListData();

    // Clears the title
    setTitle("");
    // Clears the description
    setDescription("");
  }

  // Handles the log out event
  async function handleLogOut() {
    // Log out fetch request
    await fetch("http://localhost:5000/api/account/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    // Lets the user know that they were logged out
    alert("You were logged out successfully");

    // Sends the user back to the log in page
    navigate("/");
  }

  // View
  return (
    <div>
      <h2>Homepage</h2>

      <h3>New list item</h3>
      <form>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" onClick={addListItem}>
          Add
        </button>
      </form>

      <h3>Your list:</h3>
      <ul>
        {list.map((listItem) => (
          <li key={listItem.id}>
            <h5>{listItem.title}</h5> <p>{listItem.description}</p>
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
}

// Export
export default Homepage;
