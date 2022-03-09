import { useState,useEffect } from "react";

export const useFetch=(url)=>{
    const [data, setData]= useState(null)
    const[isPending, setIspending]=useState(false)
    const[error, setError]=useState(null)


    useEffect(()=>{
    const controller=new AbortController()
      const fetchData=async()=>{
          setIspending(true)

          try{
            const res = await fetch(url,{signal:controller.signal})
            const json= await res.json()
            if(res.ok===false){
                throw new Error(res.statusText)
            }

            setIspending(false)
            setData (json)
            setError(null)
          }catch(err){
              if(err.name==='AbortError'){
                  console.log('The fetch was aborted')
              }else{
                setIspending(false)
                setError('Could not fetch data')
                console.log(err.message)
              }
             
          }
        
        }

        fetchData()
        return()=>{
            controller.abort()
        }
    },[url])
   
    return {data, isPending, error}
}

