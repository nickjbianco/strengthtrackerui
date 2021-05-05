import React from "react";

const Dashboard = (props) => {
  if (props.loggedIn) {
    return (
      <div>
        <h1>Status: {`${props.loggedIn}`}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please login to acces to site.</h1>
      </div>
    );
  }
};

export default Dashboard;
