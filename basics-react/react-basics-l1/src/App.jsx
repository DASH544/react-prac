import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    if (count >= 20) {
      setCount(count);
    } else setCount(count + 1);
  };
  const subValue = () => {
    if (count <= 0) {
      setCount(count);
    } else setCount(count - 1);
  };
  return (
    <>
      <h1>COUNTER</h1>
      <br />
      <h1>Counter Value:{count}</h1>
      <br />
      <button onClick={addValue}>Add VALUE {count} </button>
      <br />
      <button onClick={subValue}>Subtract VALUE {count} </button>
    </>
  );
}

export default App;
