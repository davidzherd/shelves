import { useEffect, useState } from 'react'

const useApi = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getData = async()=>{
        const request = await fetch(`${url}`);
        const rawData = await request.json();
        console.log(rawData)
        setData(rawData)
    }

    useEffect(()=>{
        setLoading(true)
        try{
            getData()
            setError(false)
        }catch(e){
            setError(true)
        }finally{
            setLoading(false)
        }
    },[])

  return [data, loading, error, setData]
}

export default useApi
