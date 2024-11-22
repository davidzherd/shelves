import React, { useContext } from "react";
import styled from "styled-components";
import { colorsV2 } from "../assets/siteConfig";
import { Text } from "./Text";
import { statusTypes } from "../assets/siteConfig";
import { EditOrderContext } from "../Context";
const OrderCard = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: transparent;
  border-bottom: solid 1px ${colorsV2.accentBlue};
  padding: 1rem;
  justify-items: center;
  cursor: pointer;
  transition: 0.3s all;
  align-items: center;
  &:hover {
    background-color: ${colorsV2.accentBlue};
    border-radius: 0.5rem;
  }
`;
const Order = ({ order }) => {
  const orderCtx = useContext(EditOrderContext);

  const handleOrderSelection = () => {
    orderCtx.updateSelectedOrder(order);
    orderCtx.updateEditMode(true);
  };
  return (
    <OrderCard onClick={handleOrderSelection}>
      <Text color={colorsV2.textLight} size={1}>
        &#8362;{order.price.toFixed(2)}
      </Text>
      <Text color={colorsV2.textDark} size={1}>
        {statusTypes[order.status]}
      </Text>
      <Text color={colorsV2.textDark} size={1}>
        {order.name}
      </Text>
      <Text color={colorsV2.textDark} size={1}>
        {order.date}
      </Text>
    </OrderCard>
  );
};

export default Order;
