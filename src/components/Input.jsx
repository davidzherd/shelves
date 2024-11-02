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
text-align: ${props=>props.textAlign ?? 'right'};
direction: ${props => props.textAlign === 'right' ? 'rtl': 'ltr'};
width: ${props=>props.width};
height: ${props=>props.height};
font-size: 1rem;
`;
export const AreaText = styled.textarea`
border: solid 1px ${(props)=>props.color};
box-shadow: 1px 1px 2px ${(props)=>props.color};
border-radius: 12px;
height: 2rem;
outline: none;
color: ${colorsV2.textLight};
padding-Inline: 0.25rem;
background: ${colorsV2.white};
width:${props=>props.width}
text-align: ${props=>props.textAlign ?? 'right'};
direction: ${props => props.textAlign === 'right' ? 'rtl': 'ltr'};
width: ${props=>props.width};
height: ${props=>props.height};
resize: none;
font-size: 1rem;
`;