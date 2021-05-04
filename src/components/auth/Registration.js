import React, { useState } from "react";
import axios from "axios";

const Registration = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [registrationErrors, setRegistrationErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a post request to registration route in Rails API to create a user
    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email,
            password,
            passwordConfirmation, // The syntax here is different in Ruby, somehow this works though
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created")
          props.handleSuccessfulAuth(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
  };

  const handleChange = (e) => {
    e.target.name === "email" && setEmail(e.target.value);
    e.target.name === "password" && setPassword(e.target.value);
    e.target.name === "passwordConfirmation" &&
      setPasswordConfirmation(e.target.value);
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
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Password Confirmation"
          value={passwordConfirmation}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
