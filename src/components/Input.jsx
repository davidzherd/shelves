import styled from "styled-components";
import { colorsV2 } from "../assets/siteConfig";

export const Input = styled.input`
border: solid 1px ${(props)=>props.color};
box-shadow: 1px 1px 2px ${(props)=>props.color};
border-radius: 12px;
height: 2rem;
outline: none;
color: ${colorsV2.textLight};
padding-Inline: 0.25rem;
background: ${colorsV2.white};
width:${props=>props.width}
`;