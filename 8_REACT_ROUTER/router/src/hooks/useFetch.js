import { useState, useEffect} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (e) {
                console.log(e.messsage);            
            }   
            
        }
        fetchData();
    }, [url])

    return { data }
}

