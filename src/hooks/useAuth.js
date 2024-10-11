import React, { useEffect, useState } from 'react'
import { validateAuth } from '../assets/logic'

const useAuth = (initial) => {
    const [token, setToken] = useState(initial)
    const [authorized, setAuthorized] = useState(false)

    useEffect(()=>{
        checkAuth(token)
    },[token])

    const checkAuth = async(authToken)=>{
        const valid = await validateAuth(authToken)
        valid === 200 ? setAuthorized(true) : setAuthorized(false)
    }
  return [authorized, setToken]
}

export default useAuth
