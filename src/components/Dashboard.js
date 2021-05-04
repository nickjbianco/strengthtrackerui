import React from "react";

const Dashboard = (props) => {
  if (props.loggedIn) {
    return (
      <div>
        <h1>Dashboard</h1>
        <h2>Stauts: {`${props.loggedIn}`}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please login to gain view page.</h1>
      </div>
    );
  }
};

export default Dashboard;
