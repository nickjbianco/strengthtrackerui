import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a post request to sessions route in Rails API to create a log in an existing user
    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            email,
            password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        response.data.logged_in && props.handleSuccessfulAuth(response.data);
      })
      .catch((error) => {
        console.log("login error: ", error);
      });

    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    e.target.name === "email" && setEmail(e.target.value);
    e.target.name === "password" && setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
