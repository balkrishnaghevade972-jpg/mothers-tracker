import React, { useState } from "react";
import DietPlan from "./components/DietPlan";
import Tracker from "./components/Tracker";
import Notifications from "./components/Notifications";

function App() {
  const [weight, setWeight] = useState("");
  const [stage, setStage] = useState("pregnancy");

  return (
    <div className="app">
      <h1>🌸 Mother Diet Tracker</h1>
      <div className="form">
        <label>Enter your weight (kg): </label>
        <input 
          type="number" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
        />
        <label>Select stage: </label>
        <select value={stage} onChange={(e) => setStage(e.target.value)}>
          <option value="pregnancy">Pregnancy</option>
          <option value="post-pregnancy">Post-Pregnancy</option>
          <option value="after-pregnancy">After Pregnancy</option>
        </select>
      </div>

      <DietPlan weight={weight} stage={stage} />
      <Tracker />
      <Notifications />
    </div>
  );
}

export default App;
