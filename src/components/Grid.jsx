import styled from "styled-components";

export const Grid = styled.div`
display: grid;
grid-template-columns: ${props => props.$columnsTemplate ?? "1fr"};
gap: 0.5rem;
place-items:center end;

@media (max-width: 500px) {
    grid-template-columns: 1fr;
    margin-inline: auto;
}
`;