import styled from "styled-components";
import { colors } from "../assets/siteConfig";

export const StyledButton = styled.button`
display:flex;
font-size: ${props => props.size || "1rem"};
font-weight: ${props => props.weight || "400"};
color: ${props => props.selected ? "white" : colors.darkGreen};
border-radius: 12px;
border:  solid 1px ${colors.lightGreen};
background: ${props => props.selected ? colors.lightGreen : "white"};
text-justify: center;
cursor: pointer;
height: 2rem;
align-items: center;
justify-content: center;
overflow-wrap: break-word;
padding: 0.5rem 0.7rem;
&:hover {
background: ${colors.lightGreen};
}

`;

export const Button = (props)=>{
    return <StyledButton { ...props }></StyledButton>
}