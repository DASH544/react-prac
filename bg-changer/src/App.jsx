import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")


  return (
    <>
    <div style={{backgroundColor:color}} className='min-h-screen  '>
    <div className='fixed bottom-12 bg-blue-900 w-full py-2 text-white flex gap-8  justify-center'>
    <button onClick={()=>{setColor("red")}} className='bg-red-700 px-6 py-2 rounded-xl '>Red</button>
    <button onClick={()=>{setColor("blue")}} className='bg-red-700 px-6 py-2 rounded-xl '>Blue</button>
    <button onClick={()=>{setColor("black")}}  className='bg-red-700 px-6 py-2 rounded-xl '>Black</button>
   </div>
    </div>
   
    </>
  )
}

export default App
