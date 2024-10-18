import './global.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Settings from './components/settings';
import { AdminContext } from './Context';
import PriceCalculator from './components/PriceCalculator';
import Dashboard from './components/Dashboard';
import { deleteFromLocalStorage } from './assets/storage';

function App() {

  const [admin, setAdmin] = useState(false);
  const [openedSettings, setOpenedSettings] = useState(false);

  const handleLogOut = ()=>{
    deleteFromLocalStorage('shelfLoginToken')
    setAdmin(false)
  }



    return (
      <AdminContext.Provider value={admin}>
        <Navbar login={()=>setOpenedSettings(prev=>!prev)} logout={handleLogOut}/>
          {!admin && <PriceCalculator/>}
          {admin && <Dashboard/>}
        <Settings bottom={openedSettings? "0": "-2000px"} settingsAction={()=>setOpenedSettings(prev=>!prev)}  updateAdmin={setAdmin}/>
      </AdminContext.Provider>
    )
  }

export default App
