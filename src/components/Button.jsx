import styled from "styled-components";
import { colorsV2 } from "../assets/siteConfig";

export const Button = styled.button`
display:flex;
font-size: ${props => props.size || "1rem"};
font-weight: ${props => props.weight || "400"};
color: ${props => props.selected ? "white" : colorsV2.textLight};
border-radius: 10px;
border:  solid 1px ${colorsV2.textLight};
background: ${props => props.selected ? colorsV2.lightNavi : "transparent"};
text-justify: center;
cursor: pointer;
height: 2rem;
align-items: center;
justify-content: center;
overflow-wrap: break-word;
padding: 1.3rem 1.2rem;
transition: all 0.2s;
&:hover {
background: ${props=> props.selected? colorsV2.navi : colorsV2.accentBlue};
}
`;
