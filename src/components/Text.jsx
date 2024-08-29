import styled from "styled-components";
import { colors } from "../assets/siteConfig";

export const Text = styled.p`
display: inline;
font-size: ${props => props.size + "rem" || "1rem"};
text-shadow: ${props => props.shadow ?  ("0px 2px 2px"+colors.darkGreen) : "none"};
font-weight: ${props => props.weight || "400"};
color: ${props => props.color || "white"};

@media (max-width: 800px) {
font-size: ${props => (props.size/2) <= 1 ? props.size+"rem" : (props.size/2)+"rem"};
}
@media (max-width: 400px) {
font-size: ${props => (props.size/2.5) <= 1 ? "1rem" : (props.size/2.5)+"rem"};
font-weight: 500;
}
`;
