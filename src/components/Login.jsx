import React, { useEffect, useState } from 'react'
import { Text } from './Text'
import { Input } from './Input'
import { Button } from './Button'
import { colors, colorsV2 } from '../assets/siteConfig'
import { getAuth } from '../assets/logic'
import { CiLogin } from 'react-icons/ci'
import { IoIosWarning } from "react-icons/io";
import { Wrapper } from './Wrapper'

const Login = ({setTokenFunction}) => {
    const [credentials, setCredentials] = useState({email:"", password: ""})
    const [error, setError] = useState("")



    const handleInput=(identifier,value)=>{
        if(identifier === "email"){
            setCredentials({...credentials, email:value.target.value});
        }else{
            setCredentials({...credentials, password:value.target.value});
        }
    }
    const loginValidation = ()=>{
      if(credentials.email !== "" && credentials.password !== ""){
        setError("")
        handleLogin()
      }
      if(credentials.email === "" || credentials.password === ""){
        setError(".אנא מלא את כל השדות")
      }
    }

    const handleLogin = async()=>{
        const authToken = await getAuth(credentials.email,  credentials.password);
        if(authToken === undefined){
          setError(".פרטי ההתחברות שהזנת שגויים")
        }else{
          setError("")
          setTokenFunction(authToken);
        }
    }

    const detectKey=(e)=>{
      if(e.key === "Enter"){
        loginValidation()
      }
    }

    useEffect(()=>{
      document.addEventListener('keydown',detectKey)
      return ()=> document.removeEventListener('keydown', detectKey)
    },[credentials.email, credentials.password])


  return (
    <Wrapper
      direction="column"
      align ="end"
      gap="0.5rem"
    >
      <Text color={colorsV2.textLight} weight={"500"} size={1.5} scale={2}>לשימוש מלא באתר יש לבצע התחברות</Text>
      <Wrapper
      justify="end"
      gap="0.5rem"
      width="50%">
        <Input style={{alignSelf:"end", flexGrow:"1"}} color={colorsV2.accentLightPurple} onChange={(e)=>handleInput("email",e)}></Input>
        <Text color={colors.navi} weight={"500"} side="end" size={1.2}>:דוא"ל</Text>
      </Wrapper>
      <Wrapper
      justify="end"
      gap="0.5rem"
      width="50%">
        <Input type="password" style={{alignSelf:"end", flexGrow:"1"}} color={colorsV2.accentLightPurple} onChange={(e)=>handleInput("password",e)}></Input>
        <Text color={colors.navi} weight={"500"} side="end" size={1.2}>:סיסמה</Text>
      </Wrapper>
      <Wrapper
      gap="0.5rem">
        <Button onClick={loginValidation} selected>התחברות <CiLogin className='icon' /> </Button>
      </Wrapper>
      {error !== "" && <Text color={"red"} weight={"500"} style={{alignItems:"center",display:'flex'}} side="end">{error}<IoIosWarning size={"24px"} /></Text>}
    </Wrapper>
  )
}

export default Login
