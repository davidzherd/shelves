import './global.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Settings from './components/settings';
import { AdminContext } from './Context';
import PriceCalculator from './components/PriceCalculator';
import CreateOrder from './components/CreateOrder';

function App() {

  const [admin, setAdmin] = useState(false);
  const [openedSettings, setOpenedSettings] = useState(false);



    return (
      <AdminContext.Provider value={admin}>
        <Navbar settingsAction={()=>setOpenedSettings(prev=>!prev)}/>
          {!admin && <PriceCalculator/>}
          {admin && <CreateOrder/>}
        <Settings bottom={openedSettings? "0": "-2000px"} settingsAction={()=>setOpenedSettings(prev=>!prev)}  updateAdmin={setAdmin}/>
      </AdminContext.Provider>
    )
  }

export default App
