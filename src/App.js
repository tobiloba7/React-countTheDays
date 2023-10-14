import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function handlePreviousCount() {
    setCount((s) => s - step);
  }

  function handleNextCount() {
    setCount((s) => s + step);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          <button onClick={() => setStep((s) => s - 1)}>-</button>
          <p>Step: {step} </p>
          <button onClick={() => setStep((s) => s + 1)}> + </button>
        </div>
        <div style={{ display: "flex" }}>
          <button onClick={handlePreviousCount}> - </button>
          <p>Count: {count} </p>
          <button onClick={handleNextCount}> + </button>
        </div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <p>{date.toDateString()}</p>
      </div>
    </div>
  );
}
