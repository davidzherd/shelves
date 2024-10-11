import React, { useState } from 'react'
import { Card } from './Card'
import { Text } from './Text'
import { VscClose } from 'react-icons/vsc'
import { Input } from './Input'
import { Button } from './Button'
import { colors } from '../assets/siteConfig'
import { getAuth } from '../assets/logic'

const Login = ({setTokenFunction,close}) => {
    const [credentials, setCredentials] = useState({email:"", password: ""})

    const handleInput=(identifier,value)=>{
        if(identifier === "email"){
            setCredentials({...credentials, email:value.target.value});
        }else{
            setCredentials({...credentials, password:value.target.value});
        }
    }

    const handleLogin = async()=>{
        const authToken = await getAuth(credentials.email,  credentials.password);
        setTokenFunction(authToken);
    }


  return (
    <Card className="message" style={{flexDirection: "column", gap: "2rem"}}>
        <div style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>
        <Text color={colors.darkGreen} weight={"500"} scale={2}>Please Log in first!</Text>
        <VscClose className="cursor" style={{color:colors.navi, scale:"2"}} onClick={close} />
        </div>
        <div style={{display: "flex",flexDirection: "column", gap: "1rem"}}>
        <Text color={colors.navi} weight={"500"}>Enter E-mail:</Text>
        <Input style={{width: "70%"}} onChange={(e)=>handleInput("email",e)}></Input>
        <Text color={colors.navi} weight={"500"}>Enter Password:</Text>
        <Input type="password" style={{width: "70%"}} onChange={(e)=>handleInput("password",e)}></Input>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Button onClick={handleLogin} selected>Log in</Button>
        </div>
      </Card>
  )
}

export default Login
