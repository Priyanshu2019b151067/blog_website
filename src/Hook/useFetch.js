import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error,setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url,{signal:abortCont.signal}).then((response) =>{
            if(!response.ok)
            {
                throw Error('could not Fetch the data form this endpoint')
            }
            return response.json();

        }).then((data)=>{
            setData(data);
            setPending(false)
            setError(null)
        }).catch(err=>{
            if (err.name === 'AbortError') {
                console.log('Fetch aborted');
            }else{
                console.log('Fetch aborted');
                setPending(false)
                setError(err.message)
            }
            
        })
        
        return ()=> abortCont.abort();
    }, [url])
    return {data,isPending,error};
}
 
export default useFetch;