import { useState } from "react";
import "./style.css";
export default function Counter() {
  let [count, setCount] = useState(99);
  const increment = () => {
    setCount(++count);
  };
  const decrement = () => {
    setCount(--count);
  };
  return (
    <div className="counter">
      <>The current count is {count} </>
      <div id="button-container">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
