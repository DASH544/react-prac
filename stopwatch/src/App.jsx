import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [timer,setTimer]=useState(0)
  const [running,setRunning]=useState(false)

useEffect(()=>
    {
      let interval;
      if(running){
     interval=setInterval(()=>setTimer((curr)=>curr+10),
      100)
  }
    else if(!running)
      {
        clearInterval(interval)
      }
      return ()=> clearInterval(interval)
    },
    [running])
const formatTime=(timer)=>
{
  const minutes=`0${Math.floor((timer/60000)%60)}`.slice(-2);
  const sec=`0${Math.floor((timer/1000)%60)}`.slice(-2);
  const milisec=`0${(timer/10)%100}`.slice(-2);
  return `${minutes}:${sec}:${milisec}`
}

  return (
    <>
    <p>{formatTime(timer)}</p>
    <button onClick={()=>{setRunning(!running)}}>{running ? "Stop" : "Start"}</button>
    <button onClick={()=>{setTimer(0)}}>Reset</button>
    
    </>
  )
}

export default App
