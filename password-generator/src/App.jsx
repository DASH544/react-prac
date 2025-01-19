import { useState,useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [Number, setNumber] = useState(false);
  const [Char, setChar] = useState(false);
  const [Pass, setPass] = useState("")
  const passwordRef=useRef(null)
  const passwordGen= useCallback(()=>
    {
      let password=""
      let str="ABCDEFGHIGKLMNOPQRSTUYWXZabcdefgihjklmnopqrtstuywxz"
      if(Number) str+="0123456789"
      if(Char) str+="!@#$%^&*()_+~"
      for(let i=1;i<=length;i++)
        {
          let chars=Math.floor(Math.random()*str.length+1)
          password += str.charAt(chars)
        }
        setPass(password)
   

    },[length,Number,Char,setPass])

    // const copypassword=useCallback(()=>{
    //   passwordRef.current?.select();
    //  // passwordRef.current?.setSelectionRange(0,20)
    //   window.navigator.clipboard.writeText(Pass)
    // },[Pass])
    useEffect(()=>{
      passwordGen()},
      [length,Number,Char,passwordGen])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700'>
      <h1>Password Generator</h1>
      <div className="flex flex-col gap-2">
      <div className="flex gap-1">
        <input type="text" className='w-full ps-2' name="" id="" placeholder="Password" readOnly value={Pass} ref={passwordRef} />
        <button className="bg-orange-600 text-white px-4 py-1 rounded-xl">Copy</button> 
        </div>
        <div className="flex gap-2">
          <input type="range" name="" id="passlength" min={8} max={32} value={length} onChange={(e)=>setLength(e.target.value)}/>
          <label htmlFor="passlength">Length:{length}</label>
          <input type="checkbox" name="" id="Number" defaultChecked={Number} onChange={()=>{setNumber((prev)=>!prev)}} />
          <label htmlFor="Number">Number</label>
          <input type="checkbox" name="" id="Special-Char" defaultChecked={Char} onChange={()=>{setChar((prev)=>!prev)}} />
          <label htmlFor="Special-Char">Special Char</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
