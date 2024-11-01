import styled from "styled-components";

export const StyledPopUp = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: absolute;
    bottom:${props=>props.bottom ?? "0"};
    left: 0;
    transition: all 0.3s;
    .cursor:hover{
    cursor: pointer;
    }
`;
