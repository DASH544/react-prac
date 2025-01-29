import { useEffect, useState } from "react";

export default function useCurrency(currency)
    {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

        const [currencyData,setCurrencyData]=useState({})
        const getData=async () =>
            {
                const response=await fetch(url)
                const data=await response.json();
                setCurrencyData(data[currency])
                
            }
        
        useEffect(()=>
            {
               getData();
               
               
            },[currency])

            return currencyData
    }