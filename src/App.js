import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import GoalPage from "./components/goals/GoalPage";
import "./App.css";

const App = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = (data) => {
    setLoggedIn(true);
    setUser(data.user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUser({});
  };

  const checkLoginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && !loggedIn) {
          setLoggedIn(true);
          setUser(response.data.user);
        } else if (!response.data.logged_in && loggedIn) {
          setLoggedIn(false);
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
                loggedIn={loggedIn}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
              />
            )}
          />
          <Route
            exact
            path={"/dashboard"}
            render={(props) => <Dashboard {...props} loggedIn={loggedIn} />}
          />
          <Route
            exact
            path={"/goalpage"}
            render={(props) => <GoalPage {...props} loggedIn={loggedIn} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
