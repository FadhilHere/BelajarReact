import React from "react";

const PassParameter = () => {
  const sayHello = (name) => {
    alert(`Hello, ${name}!`);
  };

  return (
    <button
      onClick={() => {
        sayHello("Yomi");
      }}
    >
      Say Hello
    </button>
  );
};

export default PassParameter;
