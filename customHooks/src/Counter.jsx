import React from 'react'
import useCounter from '../hooks/useCounter.jsx'
const Counter = () => {
    const {count,increase}=useCounter()
  return (
  <>
  <button onClick={increase}>Inc:{count}</button>
  </>
  )
}
export default Counter
