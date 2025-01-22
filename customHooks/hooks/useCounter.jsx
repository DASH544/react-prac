import { useState } from "react";

function useCounter() {
    const [count, setCount] = useState(0);
  
    function increase() {
      setCount(c => c + 1);
    }
  
    return {
      count: count,
      increase: increase
    };
  }
  export default useCounter
  