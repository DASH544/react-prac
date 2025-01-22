import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
function FetchDisplay() {
  const [post,setPost]=useState(1)
    const { fetchdata,loading }=useFetch('https://jsonplaceholder.typicode.com/todos/'+ post)
  if(loading)
    {
      return <div>Loading</div>
    }
    return (
    <div>
     <button onClick={()=>setPost(1)}>1</button>
     <button onClick={()=>setPost(2)}>2</button>
     <button onClick={()=>setPost(3)}>3</button>
      {JSON.stringify(fetchdata)}
    </div>
  )
}

export default FetchDisplay
