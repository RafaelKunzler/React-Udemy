import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url, itemUrl) => {
    const [data,setData] = useState(null)

    // 5 - refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [itemId, setItemId] = useState(null);

    // 6 - loading
    const [loading, setLoading] = useState(false);

    // 7 - tratando erro
    const [error, setError] = useState(null);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            });            
            setMethod(method)
        }   
        
        if ( method === "DELETE"){
            setConfig({
                method,                
            });
            setMethod(method)
            setItemId(data) 
        }
    };

    // const httpRemove = (itemUrl, method) => {
    //     if (method === "DELETE") {
    //         setConfig({
    //             method,                
    //         });
    //         setMethod(method)
    //         setItemId(itemUrl)            
    //     }
    // }
    

    useEffect(() => {
        const fetchData = async () => {

            // 6 - loading
            setLoading(true);

            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);                
            } catch (error) {
                console.log(error.message);
                setError("Houve algum erro ao carregar os dados!");
            }

            setLoading(false);
        }

        fetchData();

    }, [url, callFetch]);

    // 5 - refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            if(method === 'POST'){
                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallFetch(json);
            }
        };
        httpRequest();
    }, [config, method, url])

    // 8 - exclundo itens
    useEffect(() => {
        const removeItem = async () => {
            if(method === 'DELETE'){        
                await fetch(itemId, config);                  
                setCallFetch(itemId);
            }            
        }
        removeItem();
        
    }, [config, method, itemId]);

    return { data, httpConfig, loading, error, itemId };
}