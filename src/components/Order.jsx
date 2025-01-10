import React, { useContext, useState } from "react";
import styled from "styled-components";
import { colorsV2, dateDifference } from "../assets/siteConfig";
import { Text } from "./Text";
import { EditOrderContext } from "../Context";
import Dropdown from "./Dropdown";
import { NotificationCircle } from "./notificationCircle";
const OrderCard = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: ${(props) => props.bgColor};
  border-radius: 0.5rem;
  border-bottom: solid 1px ${colorsV2.accentBlue};
  padding: 1rem;
  justify-items: center;
  cursor: pointer;
  transition: 0.3s all;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.hoverColor};
    border-radius: 0.5rem;
  }
`;
const Order = ({ order }) => {
  const orderCtx = useContext(EditOrderContext);
  const handleOrderSelection = () => {
    orderCtx.updateSelectedOrder(order);
    orderCtx.updateEditMode(true);
  };

  // Set color for the order depending on the time passed
  const notificationColor = {
    color: "transparent",
    glowColor: "transparent",
  };
  const daysPassed = dateDifference(order.date);

  if (daysPassed <= 3) {
    notificationColor.color = "transparent";
    notificationColor.glowColor = "transparent";
  } else if (daysPassed < 10) {
    notificationColor.color = "#ffc847";
    notificationColor.glowColor = "#ffd980";
  } else {
    notificationColor.color = "red";
    notificationColor.glowColor = "#ff8080";
  }
  return (
    <OrderCard
      onClick={handleOrderSelection}
      bgColor={"transparent"}
      hoverColor={colorsV2.accentBlue}
    >
      <Text color={colorsV2.textDark} size={1}>
        &#8362;{order.price.toFixed(2)}
      </Text>
      <Dropdown order={order}></Dropdown>
      <Text color={colorsV2.textDark} size={1}>
        {order.name}
      </Text>
      <Text color={colorsV2.textDark} size={1}>
        {order.date}
      </Text>
      <NotificationCircle
        color={notificationColor.color}
        glowColor={notificationColor.glowColor}
      />
    </OrderCard>
  );
};

export default Order;
