import HeaderComp from "./components/HeaderComp";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";
function App() {
  const [enteredValues, setEnteredValues] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = enteredValues.duration > 0;
  function handleChange(inputIdentifier, newValue) {
    setEnteredValues((currState) => ({
      ...currState,
      [inputIdentifier]: +newValue,
    }));
  }
  return (
    <>
      <HeaderComp />
      <UserInput onChangeInput={handleChange} enteredValues={enteredValues} />
      {inputIsValid ? (
        <Result userInput={enteredValues} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
