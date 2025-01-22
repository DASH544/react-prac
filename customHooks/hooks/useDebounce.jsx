import { useEffect } from "react"

export default function useDebounce(orginalfn)
{
    const ref=useRef()
   const fn=()=>
    {
        clearTimeout(ref.current);
        ref.current=setTimeout(orginalfn,30)
    }
    return fn

}