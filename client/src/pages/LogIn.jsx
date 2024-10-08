// Imports
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Log In page
function LogIn() {
  // Email state
  const [email, setEmail] = useState("tom@test.com");
  // Password state
  const [password, setPassword] = useState("Pa$$w0rd");

  // Navigate
  const navigate = useNavigate();

  // Handles the login event
  async function handleLogIn(event) {
    // Prevents page from reloading
    event.preventDefault();

    // Creates an object with the user's information
    const userInfo = {
      email,
      password,
    };

    // Log in fetch request
    await fetch("http://localhost:5000/api/login?useCookies=true", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    // Auth fetch request
    const authRes = await fetch("http://localhost:5000/api/account", {
      credentials: "include",
    });

    // Converts auth fetch request to JSON
    const authResData = await authRes.json();

    // Checks if user is authenticated (Cookie was created successfully)
    if (authResData.isAuthenticated) {
      // If so, go to homepage
      navigate("homepage");
    } else {
      // Else, display error alert
      alert("Incorrect log in credentials! Try again.");
    }
  }

  // View
  return (
    <div>
      <h2>Log In</h2>

      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={handleLogIn}>
          Log in
        </button>

        <Link to={"/sign-up"}>
          <button>Sign up instead</button>
        </Link>
      </form>
    </div>
  );
}

// Export
export default LogIn;
