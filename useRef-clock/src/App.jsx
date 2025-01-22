import { useState,useRef } from 'react'


function App() {
  const emailRef=useRef(null)
const focusRef=()=>
  {
    emailRef.current?.focus()
  }
  return (
    <>
    <div>
      <input ref={emailRef}  type="text" />
      <input type="text" />
      <button onClick={focusRef}>Submit </button>
    </div>
    </>
  )
}

export default App
