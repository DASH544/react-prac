import { useState } from 'react'

function App() {
const [count,setCount]=useState(0)
  const addValue=()=>
    {
      setCount(count+1)
    }
    const subValue=()=>
      {
        setCount(count-1)
      }
  return (
  
      <>
      <h1>COUNTER</h1>
      <br />
      <h1>Counter Value:{count}</h1>
      <br />
      <button onClick={addValue}>Add VALUE </button>
      <br />
      <button onClick={subValue}>Subtract VALUE </button>
      </>
  )
}

export default App
