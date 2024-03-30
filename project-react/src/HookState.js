import React, { useState } from "react";

function HookState() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8">
      <h1 className="mb-4">Hook State Dibawah ini</h1>
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

export default HookState;
