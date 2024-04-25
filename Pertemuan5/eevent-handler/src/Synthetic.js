import React from "react";

const Synthetic = () => {
  return (
    <button value="Hello!" onClick={(e) => alert(e.target.value)}>
      Say Hello
    </button>
  );
};

export default Synthetic;
