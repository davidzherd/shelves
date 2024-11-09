import styled from "styled-components";
import { colorsV2 } from "../assets/siteConfig";

export const Card = styled.div`
display: flex;
flex-direction: ${colorsV2.flxDirection ?? "column"};
background-color: white;
box-shadow: 0px 1px 5px 2px ${colorsV2.shadow};
padding: 1rem;
border-radius: ${props=> props.radius ?? "0.5rem"};
gap: ${colorsV2.gap ?? "0.5rem"};
width: ${colorsV2.width};
height: ${colorsV2.height};
`;