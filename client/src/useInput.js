import { useState } from "react";
import "./styles.css";

export default function App() {
  const [item, setItem] = useState(0);

  function useInput(initialValue, validator) {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
      let willUpdate = true;
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }

      if (willUpdate) {
        setValue(e.target.value);
      }

      // console.log(e.target.value);
    };

    return { value, onChange };
  }
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Park", maxLen);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{item}</h2>
      <button onClick={() => setItem(item + 1)}>increse</button>
      <button onClick={() => setItem(item - 1)}>decreas</button>

      <input
        placeholder="name"
        value={name.value}
        onChange={name.onChange}
      ></input>
      <input placeholder="name" {...name}></input>
    </div>
  );
}
