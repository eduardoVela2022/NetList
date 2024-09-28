// Imports
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Sign up page
function SignUp() {
  // First name state
  const [firstName, setFirstName] = useState("");
  // Last name state
  const [lastName, setLastName] = useState("");
  // Email state
  const [email, setEmail] = useState("");
  // Password state
  const [password, setPassword] = useState("");

  // Navigate
  const navigate = useNavigate();

  // Handles the sign up event
  async function handleSignUp(event) {
    // Prevents page from reloading
    event.preventDefault();

    // Creates an object with the new user's information
    const newUserInfo = {
      firstName,
      lastName,
      email,
      password,
    };

    // Sign up fetch request
    const signUpRes = await fetch(
      "http://localhost:5000/api/account/register",
      {
        method: "POST",
        body: JSON.stringify(newUserInfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // If fetch request returns with 400 status, display error alert
    if (signUpRes.status === 400) {
      alert("Invalid values were entered! Check them again.");
    } else {
      // Else, display success alert and navigate the user to the login page
      alert("Your user was created successfully! You can now log in.");
      navigate("/");
    }
  }

  // View
  return (
    <div>
      <h3>Sign up</h3>

      <form>
        <label>First name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Last name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

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

        <button type="submit" onClick={handleSignUp}>
          Sign up
        </button>

        <Link to={"/"}>
          <button>Log in instead</button>
        </Link>
      </form>
    </div>
  );
}

// Export
export default SignUp;
