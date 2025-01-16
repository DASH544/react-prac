import { useEffect, useState } from "react";

function App() {
  const [todoView, settodoView] = useState(1);
  const [todoData,settodoData] = useState({})
  const [loading,setLoading]=useState(true)

  useEffect(()=>
    {
        setLoading(true)
        const fetchData=async ()=>
          {
            const response=await fetch('https://jsonplaceholder.typicode.com/todos/'+ todoView)
            const data=await response.json()
            settodoData(data)
            setLoading(false)
          }
          fetchData()
      
      //   fetch('https://jsonplaceholder.typicode.com/todos/'+ todoView)
      // .then(async (res)=>
      //   {
      //     const data=await res.json()
      //     settodoData(data)
         // setLoading(false)
        // })
       }
   ,
    [todoView])
  return (
    <>
      <button style={{color:todoView==1 ? "red" :"green"}}
        onClick={() => {
          settodoView(1);
        }}
      >
        Todo 1
      </button>
      <button style={{color:todoView==2 ? "red" :"green"}}
        onClick={() => {
          settodoView(2);
        }}
      >
        Todo 2
      </button>
      <button style={{color:todoView==3 ? "red" :"green"}}
        onClick={() => {
          settodoView(3);
        }}
      >
        Todo 3
      </button>
      <button style={{color:todoView==4 ? "red" :"green"}}
        onClick={() => {
          settodoView(4);
        }}
      >
        Todo 4
      </button>
      <br />
      {loading ? "Loading...": todoData.title}
   
    </>
  );
}

export default App;
