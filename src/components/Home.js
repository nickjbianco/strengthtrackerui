import React from "react";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import axios from "axios";

const Home = (props) => {
  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
    props.history.push("/dashboard");
  };

  const handleLogoutClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout();
      })
      .catch((error) => {
        console.log("logout error: ", error);
      });
  };

  return (
    <div>
      <h1>Home</h1>
      <h2>Status: {`${props.loggedIn}`}</h2>
      <button onClick={handleLogoutClick}>Logout</button>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
};

export default Home;
