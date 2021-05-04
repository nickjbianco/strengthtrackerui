import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = (props) => {
  // const NOT_LOGGED_IN = "NOT_LOGGED_IN"; // boolean of false
  // const LOGGED_IN = "LOGGED_IN"; // boolean of true
  const [loggedIn, setLoggedIn] = useState(false); // starts at false
  const [user, setUser] = useState({});

  const handleLogin = (data) => {
    setLoggedIn(true); // set to true
    setUser(data.user);
  };

  const handleLogout = () => {
    setLoggedIn(false); // set to false
    setUser({});
  };

  const checkLoginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && !loggedIn) {
          // if API says user is logged in and state says user is not
          setLoggedIn(true); // set to true
          setUser(response.data.user);
        } else if (!response.data.logged_in && loggedIn) {
          // if API says user is not logged in and state says user is logged in
          setLoggedIn(false); // set to false
          setUser({});
        }
      })
      .catch((error) => {
        console.log("check login error ", error);
      });
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={"/"}
            render={(props) => (
              <Home
                {...props}
                loggedIn={loggedIn} // pass in state here then check out home
                handleLogin={handleLogin}
                handleLogout={handleLogout}
              />
            )}
          />
          <Route
            exact
            path={"/dashboard"}
            render={(props) => (
              <Dashboard
                {...props}
                loggedIn={loggedIn}
                loggedIn={loggedIn} // pass in the state for logged in
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
