import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { Text } from './Text'
import { VscClose } from 'react-icons/vsc'
import { Input } from './Input'
import { Button } from './Button'
import { colors } from '../assets/siteConfig'
import { getAuth } from '../assets/logic'
import { CiLogin } from 'react-icons/ci'
import { IoIosWarning } from "react-icons/io";

const Login = ({setTokenFunction,close}) => {
    const [credentials, setCredentials] = useState({email:"", password: ""})
    const [error, setError] = useState("")

    const handleInput=(identifier,value)=>{
        if(identifier === "email"){
            setCredentials({...credentials, email:value.target.value});
        }else{
            setCredentials({...credentials, password:value.target.value});
        }
    }

    const handleLogin = async()=>{
        const authToken = await getAuth(credentials.email,  credentials.password);
        if(authToken === undefined){
          setError("You email or password are incorrect!")
        }else{
          setError("")
          setTokenFunction(authToken);
        }
    }
    const handleCancel = ()=>{
      setError("")
      setCredentials({email:"", password:""})
      close()
    }
    const detectKey=(e)=>{
      if(e.key === "Enter" && (credentials.email !== "" && credentials.password !== "")){
        setError("")
        handleLogin()
      }
      if(e.key === "Enter" && (credentials.email === "" || credentials.password === "")){
        setError("Please fill both email and password fields.")
      }
    }

    useEffect(()=>{
      document.addEventListener('keydown',detectKey)
      return ()=> document.removeEventListener('keydown', detectKey)
    },[credentials.email, credentials.password])


  return (
    <Card className="message" style={{flexDirection: "column", gap: "2rem"}}>
        <div style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>
        <Text color={colors.darkGreen} weight={"500"} scale={2}>Login</Text>
        <VscClose className="cursor" style={{color:colors.navi, scale:"2"}} onClick={handleCancel} />
        </div>
        <div style={{display: "flex",flexDirection: "column", gap: "1rem"}}>
        <Text color={colors.navi} weight={"500"}>Enter E-mail:</Text>
        <Input style={{width: "70%"}} onChange={(e)=>handleInput("email",e)}></Input>
        <Text color={colors.navi} weight={"500"}>Enter Password:</Text>
        <Input type="password" style={{width: "70%"}} onChange={(e)=>handleInput("password",e)}></Input>
        </div>
        <div style={{display: "flex", justifyContent: "center", gap:"0.5rem"}}>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleLogin} selected>Log in <CiLogin className='icon' /> </Button>
        </div>
        {error !== "" && <Text color={"red"} weight={"500"} style={{alignItems:"center",display:'flex'}}><IoIosWarning size={"24px"} />{error}</Text>}
      </Card>
  )
}

export default Login
