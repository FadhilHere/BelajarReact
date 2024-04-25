import React, { useState } from "react";

function KeyboardEvent() {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Submitted value:", inputValue);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onKeyDown={handleKeyDown}
      onChange={handleInputChange}
    />
  );
}

export default KeyboardEvent;
