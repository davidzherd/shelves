import React from 'react'
import styled from 'styled-components'
import { colors } from '../assets/siteConfig';
import { Text } from './Text';
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
box-shadow: 2px 2px 10px ${colors.darkGreen};
`;
const Navbar = ()=> {
  return (
    <StyledNavbar>
        <Text size= {2} shadow weight= "300">Make a Shelf</Text>
    </StyledNavbar>

  )
}

export default Navbar
