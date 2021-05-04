import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = (props) => {
  const NOT_LOGGED_IN = "NOT_LOGGED_IN";
  const LOGGED_IN = "LOGGED_IN";
  const [loggedInStatus, setLoggedInStatus] = useState(NOT_LOGGED_IN);
  const [user, setUser] = useState({});

  const handleLogin = (data) => {
    setLoggedInStatus(LOGGED_IN);
    setUser(data.user);
  };

  const handleLogout = () => {
    setLoggedInStatus(NOT_LOGGED_IN);
    setUser({});
  };

  const checkLoginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus === NOT_LOGGED_IN) {
          setLoggedInStatus(LOGGED_IN);
          setUser(response.data.user);
        } else if (!response.data.logged_in && loggedInStatus === LOGGED_IN) {
          setLoggedInStatus(NOT_LOGGED_IN);
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
                loggedInStatus={loggedInStatus}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
              />
            )}
          />
          <Route
            exact
            path={"/dashboard"}
            render={(props) => (
              <Dashboard {...props} loggedInStatus={loggedInStatus} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
