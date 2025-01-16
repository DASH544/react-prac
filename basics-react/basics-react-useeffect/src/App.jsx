import { useEffect, useState } from "react";

function App() {
  const [visible,setVisible]=useState(true)
  useEffect(function () {
   let clock= setInterval(function () {
      setVisible(visible=>!visible)
    }, 5000);
    return ()=>clearInterval(clock)
  }
  
, []);
  return (
    <>
      <h1>Counter</h1>
     {visible ? <Counter></Counter>: null}
    </>
  );
}
function Counter(){

  const [count, setCount] = useState(0);
  useEffect(function () {
    setInterval(function () {
      setCount(count => count + 1);
      setVisible(Math.random()>0.5 ? true:false)
    }, 1000);
  }, []);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}
export default App;
