import { useState } from "react";

function EventComponent() {
  const [counter, setCounter] = useState(0);
  function add() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={add}>ADD</button>
    </>
  );
}

export default EventComponent;
