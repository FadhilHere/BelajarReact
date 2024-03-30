import React, { useState, useEffect } from "react";

function HookEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className="p-8">
      <h1 className="mb-4">Hook Effect Dibawah ini</h1>
      <p className="mb-4">You Clicked {count} times</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}

export default HookEffect;
