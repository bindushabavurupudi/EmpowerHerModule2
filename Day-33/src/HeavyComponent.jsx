import React from "react";

function HeavyComponent() {
  console.log("Heavy Component Rendered");

  // Simulate heavy UI work
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div style={{ background: "#f2f2f2", padding: "15px" }}>
      <h3>Heavy Component</h3>
      <p>This component is expensive to render.</p>
    </div>
  );
}

export default React.memo(HeavyComponent);
