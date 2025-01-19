import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [password,setPassword]=useState("")
  const [length,setLength]=useState(8)
  const [numAllowed,setNumAllowed]=useState(false)
  const [specialAllowed,setSpecialAllowed]=useState(false)
  const passwordRef=useRef(null)
  const clipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  const pass=useEffect(()=>
    {
      let str=""
      let char="ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstyxyz"
      if(numAllowed) char+="1234567890"
      if(specialAllowed) char+="!@#$%^&*()_+"
      for(let i=1;i<=length;i++)
        {
          let indexChar=Math.floor(Math.random() * char.length +1)
          str+=char.charAt(indexChar)
        }
        setPassword(str)
    },[length,numAllowed,specialAllowed])
  return (
    <div className='bg-black text-white gap-6 grid place-content-center min-h-screen'>
      <div className='flex gap-8 w-80'>
        <input type="text"  name="" id="" readOnly placeholder='Password' className=' text-black w-full  p-1 py-2' ref={passwordRef} value={password} />
        <button onClick={clipboard}>COPY</button>
        </div>
        <div>
          <div>
            <input type="range"  name="" id="" min={1} max={32} value={length} placeholder={"password"}  onChange={(e)=>{setLength(e.target.value)}}/>
            <span>Length:{length}</span>
          </div>
          <div>
            <input type="checkbox" name="" id="" onChange={()=>setNumAllowed((prev)=>(!prev))}/>
            <label htmlFor="">Numbers</label>
            <input type="checkbox" name="" id="" onChange={()=>setSpecialAllowed((prev)=>(!prev))} />
            <label htmlFor="">Special Characters</label>
          </div>
        </div>
  
    </div>
  )
}

export default App
