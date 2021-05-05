import React from "react";
import Goal from "./Goal";

const GoalList = ({ goals }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <Goal key={goal.id} goal={goal} />
      ))}
    </ul>
  );
};

export default GoalList;
