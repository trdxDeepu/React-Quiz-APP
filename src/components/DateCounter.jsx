import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - 1 };
    case "inc":
      return { ...state, count: state.count + 1 };
    case "setCount":
      return { ...state, count: action.payload};
    case "setStep":
      return { ...state, count: action.payload};
    case "reset":
      return {...state, step:action.payload}  
    default:
      throw new Error("Unknown Action")

  }

  // if (action.type === "inc") return state + action.payload;
  // if (action.type === "dec") return state - action.payload;
  // if (action.type === "setCount") return action.payload;
  // if (action.type === "add") return state + action.payload;
}

function DateCounter() {
  // const [count, setCount] = useState(0);

  // const [step, setStep] = useState(1);
  const initialValue = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { count, step } = state;
  // This mutates the date object.
  const date = new Date("8 sept 2023");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
