import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Toolbar from "./Toolbar";
import Form from "./Form";
import HandleForm from "./HandleForm";
import KeyboardEvent from "./KeyboardEvent";
import EventPropagation from "./EventPropagation";
import FormWithValidation from "./FormWithValidation";
import PassParameter from "./PassParameter";
import Synthetic from "./Synthetic";
import ItemList from "./Delegtion";
import ToggleButton from "./ToggleButton";
import FormRegister from "./FormRegister";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <Toolbar />
        <Form />
        <HandleForm />
        <KeyboardEvent />
        <EventPropagation />
        {/* <FormWithValidation /> */}
        <PassParameter />
        <Synthetic />
        <ItemList />
        <ToggleButton />
        <FormRegister />
      </header>
    </div>
  );
}

export default App;
