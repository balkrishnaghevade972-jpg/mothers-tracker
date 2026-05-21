import React, { useState } from "react";

function Tracker() {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState("");

  const addMeal = () => {
    if (meal) {
      setMeals([...meals, meal]);
      setMeal("");
    }
  };

  return (
    <div className="card">
      <h2>Meal Tracker</h2>
      <input 
        type="text" 
        placeholder="Log your meal" 
        value={meal} 
        onChange={(e) => setMeal(e.target.value)} 
      />
      <button onClick={addMeal}>Add</button>
      <ul>
        {meals.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  );
}

export default Tracker;
