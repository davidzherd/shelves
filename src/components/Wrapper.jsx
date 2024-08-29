import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
width: auto;
height: auto;
background: ${props => props.background ? props.background : "none"};
margin-top: 4rem;
justify-content:center;
`;
