import React from "react";

function DietPlan({ weight, stage }) {
  let plan = "Please enter your weight.";

  if (weight) {
    if (stage === "pregnancy") {
      plan = "Eat balanced meals: fruits, vegetables, proteins, and iron-rich foods.";
    } else if (stage === "post-pregnancy") {
      plan = "Focus on recovery foods: protein, calcium, and hydration.";
    } else {
      plan = "Maintain healthy lifestyle: balanced diet and regular exercise.";
    }
  }

  return (
    <div className="card">
      <h2>Diet Plan</h2>
      <p>{plan}</p>
    </div>
  );
}

export default DietPlan;
