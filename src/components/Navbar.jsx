import React, { useContext } from 'react'
import styled from 'styled-components'
import { colors } from '../assets/siteConfig';
import { Text } from './Text';
import { AdminContext } from '../Context';
import { CiLogin } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

const StyledNavbar = styled.div`
display: flex;
position: fixed;
width: 100%;
height: 4rem;
z-index: 10;
background: ${colors.lightGreen};
align-items: center;
padding: 0 1rem;
top: 0;
left: 0;
box-shadow: 1px 1px 5px ${colors.darkGreen};
justify-content: space-between;
.settings{
  display:flex;
  align-items: center;
  jusify-content: center;
  gap: 0.5rem;
  cursor: pointer;
    color: white;
}
  .settings:hover{
  text-decoration: underline;
  }
  .icon{
  transition: all 0.1s;
  scale: 2;
  color: white;
  }
  .icon:hover{
  opacity: 0.6;
  }
`;
const Navbar = ({login, logout})=> {
  const adminCtx = useContext(AdminContext)
  return (
    <StyledNavbar>
        <Text size= {2} shadow weight= "300">Make a Shelf</Text>
        <div className='settings' onClick={adminCtx? logout : login}>
        {!adminCtx ? "Login" : "Logout"}
        {adminCtx ? <IoIosLogOut className='icon'/> : <CiLogin className='icon' />}
        </div>

    </StyledNavbar>

  )
}

export default Navbar
