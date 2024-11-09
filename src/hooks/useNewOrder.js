import { useEffect, useState } from 'react'

const useNewOrder = (length, depth, consealed, color, notes, price, status, date, phone, name) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const postData = async()=>{
        const request = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:sQvFNZLW/orders`,{method:"POST", body: JSON.stringify({ shelf_length: length,
            shelf_depth: depth,
            conseeled: consealed,
            color: color,
            notes: notes,
            price: price,
            status: status,
            date: date,
            phone_number: phone,
            name: name
         })});
        const rawData = await request.json();
        console.log(rawData)
        setData(rawData)
    }

    useEffect(()=>{
        setLoading(true)
        try{
            postData()
            setError(false)
        }catch(e){
            setError(true)
        }finally{
            setLoading(false)
        }
    },[])

  return [data, loading, error]
}

export default useNewOrder
