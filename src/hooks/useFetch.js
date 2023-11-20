import { useEffect, useState } from "react";

export function useFetch(url, options = {}){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    useEffect(() =>{
        fetch(url, {
            ...options,
            headers:{
                'Accept': 'application/json; charset=UTF-8',
                ...options.headers

            }
        }).then(result => result.json()).then(data =>{
            setLoading(false)
            setData(data)
        }).catch((error) => {
            setErrors(error)
            setLoading(false)
        }).finally(() =>{
            setLoading(false)
        })
    }, []);

    return {loading,data,errors}
}