import styled from "styled-components"
import { StyledPopUp } from "./PopUp"
import { Card } from "./Card"
import { colors } from "../assets/siteConfig"
import { Button } from "./Button"
import { Text } from "./Text"
import { Input } from "./Input"
import { VscClose } from "react-icons/vsc";
import { useEffect, useState } from "react"
import Login from "./Login"
import useAuth from "../hooks/useAuth"
import ChangeSettings from "./ChangeSettings"

const Settings = ({bottom, settingsAction}) => {
  const [currentToken,setCurrentToken] = useState("")
  const [authorized,setToken] = useAuth(currentToken)
  useEffect(()=>{
    setToken(currentToken)
  },[currentToken])
  return (
    <StyledPopUp bottom={bottom}>
      {!authorized && <Login setTokenFunction={(e)=>setCurrentToken(e)} close={settingsAction} />}
      {authorized && <ChangeSettings close={settingsAction}/>}
    </StyledPopUp>
  )
}

export default Settings