import { useState } from 'react'
import './App.css'
 import useCounter from '../hooks/useCounter.jsx'
import Counter from './Counter.jsx'
import FetchDisplay from './FetchDisplay.jsx'
import Prev from '../Prev.jsx'

 

function App() {



  return (
    <>
   <Counter></Counter>
   <Counter></Counter>
   <Counter></Counter>
   <FetchDisplay></FetchDisplay>
   <Prev></Prev>
    </>
  )
}


export default App

