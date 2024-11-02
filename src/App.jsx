import './global.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { AdminContext } from './Context';
import Dashboard from './components/Dashboard';
import { deleteFromLocalStorage, readFromLocalStorage, saveToLocalStorage } from './assets/storage';
import SidePanel from './components/SidePanel';
import Login from './components/Login';
import useAuth from "./hooks/useAuth"
import LoginImage from "./components/LoginImage"
import { Wrapper } from './components/Wrapper';
import useIsMobile from './hooks/useIsMobile';

function App() {

  const [admin, setAdmin] = useState(false);
  const [currentToken,setCurrentToken] = useState("")
  const [authorized,setToken] = useAuth(currentToken)
  const isMobile = useIsMobile(550)

  useEffect(()=>{
    setToken(currentToken)
  },[currentToken])

  useEffect(()=>{
    if (authorized){
      setAdmin(true)
      saveToLocalStorage('shelfLoginToken', currentToken)
    }else{
      const savedToken = readFromLocalStorage('shelfLoginToken')
      savedToken === null ? setAdmin(false) : setCurrentToken(savedToken)
    }
  },[authorized])

  const handleLogOut = ()=>{
    deleteFromLocalStorage('shelfLoginToken')
    setAdmin(false)
  }

    return (
      <AdminContext.Provider value={admin}>
        <Navbar logout={handleLogOut}/>
        <SidePanel/>
        {!admin &&
         <Wrapper
          direction={isMobile? "column" : "row"}
          justify="center"
          align="center"
         >
           <LoginImage />
           <Login setTokenFunction={(e)=>setCurrentToken(e)}/>
         </Wrapper>}
        {admin && <Dashboard/>}
      </AdminContext.Provider>
    )
  }

export default App
