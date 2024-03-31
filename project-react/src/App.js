import React from "react";
import "./App.css";
import Title from "./Title";
import Button from "./Button";
import FlexItems from "./FlexItems";
import GridTailwind from "./GridTailwind";
import HookState from "./HookState";
import HookEffect from "./HookEffect";
import HookContext from "./HookContext";
import Counter from "./HookReducer";
import HookCallback from "./HookCallback";
import ItemList from "./ItemList";
import GetApi from "./GetApi";
import GetApiGames from "./GetApiGames";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <FlexItems />
        <Button label="click" onClick={() => console.log("Button Clicked")} />
        <Title />
        <GridTailwind />
        <HookState />
        <HookEffect />
        <HookContext />
        <Counter />
        <HookCallback />
        <ItemList /> */}
        {/* <GetApi /> */}
        <GetApiGames />
      </header>
    </div>
  );
}

export default App;
