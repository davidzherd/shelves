import styled from "styled-components";
import { colorsV2 } from "../assets/siteConfig";

export const Text = styled.p`
display: inline;
font-size: ${props => props.size + "rem" || "1rem"};
text-shadow: ${props => props.shadow ?  ("0px 2px 2px"+colorsV2.shadow) : "none"};
font-weight: ${props => props.weight ?? "400"};
color: ${props => props.color ?? "white"};
text-align: right;
align-self: ${props=>props.side};
@media (max-width: 800px) {
font-size: ${props => (props.size/2) <= 1 ? props.size+"rem" : (props.size/2)+"rem"};
}
@media (max-width: 400px) {
font-size: ${props => (props.size/2.5) <= 1 ? "1rem" : (props.size/2.5)+"rem"};
font-weight: 500;
}
`;

export const EmptyStateText =(props)=>{
    const { customText, ...rest } = props
    return(
        <Text {...rest}>
            {customText?? "אין מידע להציג כרגע"}
        </Text>
    )
}