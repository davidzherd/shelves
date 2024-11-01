import styled from 'styled-components'
import { colorsV2 } from '../assets/siteConfig';

export const StyledTag = styled.div`
top:4rem;
display:flex;
left:${props=>props.left};
width: ${props=>props.width};
height ${props=>props.height};
position: relative;
background: ${colorsV2.bg};
box-shadow: 2px 1px 3px 1px ${colorsV2.shadow};
border-radius: 0px 5px 5px 0px;
z-index:10;
padding:0.5rem;
justify-content:center;
transition: all 0.3s;
cursor:pointer;
`;