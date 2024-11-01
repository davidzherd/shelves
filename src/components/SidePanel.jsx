import styled from 'styled-components'
import React, { useState } from 'react'
import { colorsV2 } from '../assets/siteConfig';
import PriceCalculator from './PriceCalculator';
import { IoIosCalculator } from "react-icons/io";
import { StyledTag } from './Tag';
import useIsMobile from '../hooks/useIsMobile';

const StyledSidePanel = styled.div`
top:4rem;
left:${props=>props.left};
width: ${props=>props.width};
height:calc(100% - 4.5rem);
position: absolute;
background: ${colorsV2.bg};
box-shadow: 0px 1px 5px 2px ${colorsV2.shadow};
border-radius: 0px 0px 5px 0px;
z-index:10;
padding:0;
justify-content:center;
transition: all 0.3s;
`;
const SidePanel = () => {
  const [open,setOpen] = useState(false)
  const isMobile = useIsMobile(750)
  return (
    <div>
    <StyledSidePanel width={isMobile? "90%":"30%"} left={open? "0px": (isMobile? "-90%": "-30%")} >
      <PriceCalculator/>
    </StyledSidePanel>
    <StyledTag width="2rem" height="3rem" left={open? (isMobile? "90%":"30%") : "0"} onClick={()=>setOpen((prev)=>!prev)}>
      <IoIosCalculator size="24px" style={{scale:"1.5"}} color={colorsV2.navi} />
    </StyledTag>
    </div>
    
  )
}

export default SidePanel
