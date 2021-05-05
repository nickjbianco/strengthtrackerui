import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Needs its own route, build it first then we'll worry about the route
const GoalEnterPage = () => {
  const [strengthNumbers, setStrengthNumbers] = useState({
    id: "",
    squat: "",
    bench: "",
    deadlift: "",
  });

  const handleStrengthNumbersChange = (e) => {
    e.target.name === "squat" &&
      setStrengthNumbers({ ...strengthNumbers, squat: e.target.value });
    e.target.name === "bench" &&
      setStrengthNumbers({ ...strengthNumbers, bench: e.target.value });
    e.target.name === "deadlift" &&
      setStrengthNumbers({ ...strengthNumbers, deadlift: e.target.value });
  };

  const submitGoal = (e) => {
    e.preventDefault();

    const goalSet =
      strengthNumbers.squat.trim() ||
      strengthNumbers.bench.trim() ||
      strengthNumbers.deadlift.trim();

    goalSet && setStrengthNumbers({ ...strengthNumbers, id: uuidv4() });

    setStrengthNumbers({
      id: "",
      squat: "",
      bench: "",
      deadlift: "",
    });
  };

  return (
    <div>
      <h1>Goal Ente Page</h1>
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
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
};

// Strength Goal
// Squat
// Bench
// Deadlift
// Bodyweight
// Date

export default GoalEnterPage;
