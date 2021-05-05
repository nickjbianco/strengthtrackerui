import React, { useState } from "react";
import GoalForm from "./goalcomponents/GoalForm";
import GoalList from "./goalcomponents/GoalList";

const GoalPage = (props) => {
  const [goals, setGoals] = useState([]);

  if (props.loggedIn) {
    return (
      <div>
        <h1>Enter Goals Page</h1>
        <GoalForm goals={goals} setGoals={setGoals} />
        <GoalList goals={goals} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Error, log in to gain access</h1>
      </div>
    );
  }
};

export default GoalPage;
