import styled from "styled-components";
import { colorsV2 } from "../assets/siteConfig";

export const Card = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flxDirection ?? "column"};
  background-color: white;
  box-shadow: 0px 1px 5px 2px ${colorsV2.shadow};
  padding: 1rem;
  border-radius: ${(props) => props.radius ?? "0.5rem"};
  gap: ${(props) => props.gap ?? "0.5rem"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  align-items: ${(props) => props.alignItems ?? "stretch"};
`;
