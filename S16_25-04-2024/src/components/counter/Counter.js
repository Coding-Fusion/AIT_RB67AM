import "./Counter.css";
import { useState } from "react";

export function Counter() {
  var [state, setState] = useState(0); // data = [state,setState]

  const increaseCount = () => {
    // setState("Kabir");

    setState(state + 1);
  };

  function decreaseCount() {
    setState(state - 1);
  }

  return (
    <div className="counterapp">
      <h2>Count Value is : {state}</h2>
      <button onClick={increaseCount}>increaseCount</button>&nbsp;&nbsp;
      <button onClick={decreaseCount}>decreaseCount</button>
    </div>
  );
}
