import { useEffect, useState } from "react";

function useFetch(url)
{
    const [fetchdata,setfetchData]=useState({})
    const [loading,setLoading]=useState(false)

    async function fetchs()
    {
         setLoading(true)
        const response=await fetch(url)
        const data=await response.json()
        setfetchData(data)
         setLoading(false)
    }
    useEffect(()=>
        {
            fetchs();
        },[url])
        return{fetchdata,loading}

}

export default useFetch