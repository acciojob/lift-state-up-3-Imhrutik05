
import React, {useState} from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";


const App = () => {
  const [selectedOption, setSelectedOption] = useState(``);
  
  // we need to write a handler which will change the value of selected option, and we will pass that handler as a prop in child components
  const handleSelectedOption = (id) => {
    setSelectedOption(`Option ${id}`);
  }
  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <ChildComponent1 handleSelectedOption={handleSelectedOption} />
        <ChildComponent2 handleSelectedOption={handleSelectedOption} />
        <p>Selected Option: {selectedOption} </p>
    </div>
  )
}

export default App
