import { useState } from "react";

// Log In page
function LogIn() {
  const [email, setEmail] = useState("tom@test.com");
  const [password, setPassword] = useState("Pa$$w0rd");

  async function handleSubmit(event) {
    event.preventDefault();

    const userInfo = {
      email,
      password,
    };

    const loginRes = await fetch(
      "http://localhost:5000/api/login?useCookies=true",
      {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    console.log(loginRes);
  }

  async function goToSignUp() {
    const authRes = await fetch("http://localhost:5000/api/account", {
      credentials: "include",
    });

    const dataAuth = await authRes.json();

    console.log(dataAuth);
  }

  // View
  return (
    <div>
      <h3>Log In</h3>

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

        <button type="submit" onClick={handleSubmit}>
          Log in
        </button>

        <button type="button" onClick={goToSignUp}>
          Sign up instead
        </button>
      </form>
    </div>
  );
}

// Export
export default LogIn;
