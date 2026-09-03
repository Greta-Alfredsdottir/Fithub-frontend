// Her skal der laves login

import { React, useState } from "react";

export function Loginform(props) {
  // Declares state and sets the initial state value to null
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  // When the submit button is cliced it will trigger this function to be ran
  const onSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    // Your API call fetch function
    ({ username, password })
      .then(() => {
        setUsername(null);
        setPassword(null);
        setError(null);
        setProcessing(false);
      })
      .catch((err) => {
        setError();
        setProcessing(false);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Login</h1>
      {error ? <h4>{error}</h4> : ""}
      <input
        type="text"
        name="username"
        required
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <input
        type="password"
        name="password"
        required
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button type="submit">
        {processing ? "Checking credentials..." : "Login"}
      </button>
    </form>
  );
}
