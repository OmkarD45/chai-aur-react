import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(15);

  const addValue = () => {
    // counter=counter+1
    if (counter < 20) {
      setcounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };
  // let counter=5
  return (
    <>
      <h1>Chai Aur React</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Paragraph{counter}</p>
    </>
  );
}

export default App;
