import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction:${props=>props.direction};
width: ${props=> props.width};
height: ${props=> props.height};
background: ${props => props.background};
align-items:${props=>props.align ?? "center"};
justify-content:${props=>props.justify ?? "start"};
gap: ${props=>props.gap ?? "none"};
padding: ${props=>props.padding};
margin: ${props=>props.margin};
`;
