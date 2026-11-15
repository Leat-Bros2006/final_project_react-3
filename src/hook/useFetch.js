import React, { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try{
                let response = await fetch(url)

                if(!response.ok){
                    throw new Error("Can not get data")
                }

                let result = await response.json()
                setData(result)

            } catch(err){
                setError(err.message)
            } finally{
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return {
        data,
        error,
        loading
    }
}

export default useFetch