import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='pattern'/>
     <div>
      <header>
        <h1>Find<span className='text-gradient'>Movies</span>You'll Enjoy</h1>
      </header>
     </div>
    </>
  )
}

export default App
