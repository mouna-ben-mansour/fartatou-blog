import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setDate] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        //abort controller
        const abortCont = new AbortController();
        setTimeout(()=> {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setDate(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            })
        },1000)
        return () => abortCont.abort()
    },[url]);
    return {data, isPending, error};
}
 
export default useFetch;