import React from "react";

// Typescript!
const Goal = ({ goal }) => {
  return (
    <div>
      <h3>Goal</h3>
      <p>squat: {goal.squat}</p>
      <p>bench: {goal.bench}</p>
      <p>deadlift: {goal.deadlift}</p>
      <p>bodyweight: {goal.bodyweight}</p>
      <p>date: {goal.date}</p>
    </div>
  );
};

export default Goal;
