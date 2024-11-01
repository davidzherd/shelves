import React, { useContext } from 'react'
import styled from 'styled-components'
import { Text } from './Text';
import { AdminContext } from '../Context';
import { IoIosLogOut } from "react-icons/io";
import { colorsV2 } from '../assets/siteConfig';

const StyledNavbar = styled.div`
display: flex;
position: fixed;
width: 100vw;
height: 3rem;
z-index: 10;
background: ${colorsV2.white};
align-items: center;
padding: 0 1rem;
top: 0;
left: 0;
box-shadow: 0px 1px 5px 2px ${colorsV2.shadow};
justify-content: space-between;
.settings{
  display:flex;
  align-items: center;
  jusify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${colorsV2.textDark};
}
  .settings:hover{
  text-decoration: underline;
  }
  .icon{
  transition: all 0.1s;
  scale: 2;
  color: ${colorsV2.textDark};
  }
  .icon:hover{
  opacity: 0.6;
  }
  .logo{
  cursor: default;
  }
`;
const Navbar = ({ logout})=> {
  const adminCtx = useContext(AdminContext)
  return (
    <StyledNavbar>
        <Text className='logo' size= {2} shadow color={colorsV2.textDark} weight= "300">SHELVES</Text>
        <div className='settings' onClick={adminCtx ? logout : ()=>{}}>
        {adminCtx && "התנתקות"}
        {adminCtx && <IoIosLogOut className='icon'/>}
        </div>

    </StyledNavbar>

  )
}

export default Navbar
