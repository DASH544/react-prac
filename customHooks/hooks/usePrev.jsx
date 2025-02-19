import { useRef,useEffect } from "react"
export default function usePrev(value)
{
    const ref=useRef()
    useEffect(()=>
        {
            ref.current=value
        },[value])
        return ref.current //first time undefined
}
