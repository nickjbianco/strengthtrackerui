import React, { useState } from "react";
import axios from "axios";

const GoalForm = ({ goals, setGoals }) => {
  const [strengthNumbers, setStrengthNumbers] = useState({
    id: "",
    squat: "",
    bench: "",
    deadlift: "",
    bodyweight: "",
    date: "",
  });

  const handleStrengthNumbersChange = (e) => {
    e.target.name === "squat" &&
      setStrengthNumbers({ ...strengthNumbers, squat: e.target.value });
    e.target.name === "bench" &&
      setStrengthNumbers({ ...strengthNumbers, bench: e.target.value });
    e.target.name === "deadlift" &&
      setStrengthNumbers({ ...strengthNumbers, deadlift: e.target.value });
    e.target.name === "bodyweight" &&
      setStrengthNumbers({
        ...strengthNumbers,
        bodyweight: e.target.value,
      });
    e.target.name === "date" &&
      setStrengthNumbers({
        ...strengthNumbers,
        date: e.target.value,
      });
  };

  const submitGoal = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3001/goals",
        {
          goal: {
            squat: strengthNumbers.squat,
            bench: strengthNumbers.bench,
            deadlift: strengthNumbers.deadlift,
            bodyweight: strengthNumbers.bodyweight,
            date: strengthNumbers.date,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "goal_set") {
          setStrengthNumbers({ ...response.data.goal });
          setGoals([...goals, strengthNumbers]);
        }
      })
      .catch((error) => console.log("Goals err: ", error));

    setStrengthNumbers({
      id: "",
      squat: "",
      bench: "",
      deadlift: "",
      bodyweight: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitGoal}>
      <input
        name="squat"
        type="text"
        placeholder="Enter Squat Goal"
        value={strengthNumbers.squat}
        onChange={handleStrengthNumbersChange}
      />
      <input
        name="bench"
        type="text"
        placeholder="Enter Bench Goal"
        value={strengthNumbers.bench}
        onChange={handleStrengthNumbersChange}
      />
      <input
        name="deadlift"
        type="text"
        placeholder="Enter Deadlift Goal"
        value={strengthNumbers.deadlift}
        onChange={handleStrengthNumbersChange}
      />
      <input
        name="bodyweight"
        type="text"
        placeholder="Enter Bodyweight Goal"
        value={strengthNumbers.bodyweight}
        onChange={handleStrengthNumbersChange}
      />
      <input
        required
        name="date"
        type="date"
        placeholder="Enter Deadline"
        value={strengthNumbers.date}
        onChange={handleStrengthNumbersChange}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
