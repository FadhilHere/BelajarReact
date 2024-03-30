import React from "react";
import "./FlexItem.css";
function FlexItems() {
  return (
    <div>
      <h1>Flex Container</h1>
      <p>Four Flex Items contained in a Flex Container</p>
      <div className="flex-container">
        <div style={{ backgroundColor: "orange" }}>Box 1</div>
        <div style={{ backgroundColor: "blue" }}>Box 2</div>
        <div style={{ backgroundColor: "yellow" }}>Box 3</div>
        <div style={{ backgroundColor: "red" }}>Box 4</div>
        <div style={{ backgroundColor: "green" }}>Box 5</div>
        <div style={{ backgroundColor: "purple" }}>Box 6</div>
        <div style={{ backgroundColor: "cyan" }}>Box 7</div>
        <div style={{ backgroundColor: "pink" }}>Box 8</div>
      </div>
    </div>
  );
}

export default FlexItems;
