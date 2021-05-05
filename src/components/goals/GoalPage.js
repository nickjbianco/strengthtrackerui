import React, { useState } from "react";
import GoalForm from "./goalcomponents/GoalForm";
import GoalList from "./goalcomponents/GoalList";

const GoalPage = (props) => {
  const [strengthNumbers, setStrengthNumbers] = useState({
    id: "",
    squat: "",
    bench: "",
    deadlift: "",
    bodyweight: "",
    date: "",
  });

  if (props.loggedIn) {
    return (
      <div>
        <h1>Goal Enter Page</h1>
        <GoalForm
          setStrengthNumbers={setStrengthNumbers}
          strengthNumbers={strengthNumbers}
        />
        <GoalList />
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
