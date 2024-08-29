import styled from "styled-components";
import { colors } from "../assets/siteConfig";

export const Input = styled.input`
border: solid 1px ${(props)=>props.color};
box-shadow: 1px 1px 2px ${(props)=>props.color};
border-radius: 12px;
height: 2rem;
outline: none;
color: ${colors.darkGreen};
padding-Inline: 0.25rem;
`;