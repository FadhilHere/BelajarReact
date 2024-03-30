import React, { useState, useContext } from "react";

const MyContext = React.createContext();

function HookContext() {
  const [message, setMessage] = useState("Hello from HookContext");

  return (
    <div className="p-8">
      <MyContext.Provider value={{ message, setMessage }}>
        <Child />
      </MyContext.Provider>
    </div>
  );
}

function Child() {
  const { message, setMessage } = useContext(MyContext);

  return (
    <div>
      <p className="mb-4">{message}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setMessage("Hello from child")}
      >
        Change message
      </button>
    </div>
  );
}

export default HookContext;
