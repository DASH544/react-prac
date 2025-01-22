import React, { useState } from 'react'
import usePrev from './hooks/usePrev'

const Prev = () => {
    const [count,setCount]=useState(0)
    const value=usePrev(count)
  return (
    <div>
      <button onClick={()=>setCount((c)=>c+1)}>Inc:{count}</button>
      <p>Prvious Value:{value}</p>
    </div>
  )
}

export default Prev
