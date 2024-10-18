
import { StyledPopUp } from "./PopUp"
import { useContext, useEffect, useState } from "react"
import Login from "./Login"
import useAuth from "../hooks/useAuth"
import ChangeSettings from "./ChangeSettings"
import { readFromLocalStorage, saveToLocalStorage } from "../assets/storage"
import { AdminContext } from "../Context"

const Settings = ({bottom, settingsAction, updateAdmin}) => {
  const adminCtx = useContext(AdminContext)
  const [currentToken,setCurrentToken] = useState("")
  const [authorized,setToken] = useAuth(currentToken)

  useEffect(()=>{
    setToken(currentToken)
  },[currentToken])

  useEffect(()=>{
    if (authorized){
      updateAdmin(true)
      saveToLocalStorage('shelfLoginToken', currentToken)
    }else{
      const savedToken = readFromLocalStorage('shelfLoginToken')
      savedToken === null ? updateAdmin(false) : setCurrentToken(savedToken)
    }
  },[authorized])

  return (
    <StyledPopUp bottom={bottom}>
      {!adminCtx && <Login setTokenFunction={(e)=>setCurrentToken(e)} close={settingsAction} />}
      {adminCtx && <ChangeSettings close={settingsAction}/>}
    </StyledPopUp>
  )
}

export default Settings
