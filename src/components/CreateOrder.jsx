import React, { useContext, useState } from "react";
import { colorsV2 } from "../assets/siteConfig";
import { Text } from "./Text";
import { Wrapper } from "./Wrapper";
import { AreaText, Input } from "./Input";
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";
import { postNewOrder, updateOrder } from "../api/api";
import { OrdersContext } from "../Context";
import OrderCreatedPopUp from "./OrderCreatedPopUp";
import { handleNumbers } from "../assets/logic";

const CreateOrder = ({ onEditClose, editOrder, children }) => {
  const [orderCreatedPopUp, setOrderCreatedPopUp] = useState(false);
  const [successfulPost, setSuccessfulPost] = useState(false);
  const ordersCtx = useContext(OrdersContext);

  const formDataConversion = (formTarget) => {
    const formData = new FormData(formTarget);
    const payload = Object.fromEntries(formData);
    const formPrice = handleNumbers(payload.price);
    const formLength = handleNumbers(payload.length);
    const formDepth = handleNumbers(payload.depth);
    const formConsealed = formTarget[6].checked;
    return {
      formPrice,
      formLength,
      formDepth,
      formConsealed,
      color: payload.color,
      notes: payload.notes,
      phone: payload.phone,
      name: payload.name,
    };
  };

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    const {
      formPrice,
      formLength,
      formDepth,
      formConsealed,
      color,
      notes,
      phone,
      name,
    } = formDataConversion(e.target);
    const newData = await postNewOrder(
      formDepth,
      formLength,
      formConsealed,
      color,
      notes,
      formPrice,
      phone,
      name
    );
    newData && ordersCtx.updateDataObject(newData);
    document.getElementById("orderForm").reset();
    newData ? setSuccessfulPost(true) : setSuccessfulPost(false);
    setOrderCreatedPopUp(true);
  };

  const handleEditOrder = async (e) => {
    e.preventDefault();
    const {
      formPrice,
      formLength,
      formDepth,
      formConsealed,
      color,
      notes,
      phone,
      name,
    } = formDataConversion(e.target);
    const newData = await updateOrder(
      formDepth,
      formLength,
      formConsealed,
      color,
      notes,
      formPrice,
      phone,
      name,
      editOrder.date,
      editOrder.status,
      editOrder.id
    );
    newData && ordersCtx.updateDataObject(newData);
    onEditClose();
  };

  return (
    <>
      <form
        onSubmit={!editOrder ? handleCreateOrder : handleEditOrder}
        id="orderForm"
      >
        <Wrapper style={{ alignItems: "stretch" }}>
          <Wrapper
            margin="0 1rem"
            padding="0 0 0 1rem"
            direction="column"
            align="end"
            gap="1rem"
            style={{ borderLeft: `solid 2px ${colorsV2.accentBlue}` }}
          >
            <Text color={colorsV2.textDark} size={2}>
              :מאני טיים
            </Text>
            <Wrapper gap="0.5rem">
              <Text color={colorsV2.textDark} size={1.5}>
                &#8362;
              </Text>
              <Input
                required
                width="5rem"
                color={colorsV2.accentBlue}
                name="price"
                defaultValue={editOrder && editOrder.price}
              />
              <Text color={colorsV2.textDark}>מחיר סופי</Text>
            </Wrapper>
            {!editOrder && (
              <Button
                selected
                style={{ alignSelf: "center", marginBlock: "2rem" }}
              >
                יצירת הזמנה
              </Button>
            )}
          </Wrapper>
          <Wrapper
            margin="0 1rem"
            padding="0 0 0 1rem"
            direction="column"
            align="end"
            gap="1rem"
            style={{ borderLeft: `solid 2px ${colorsV2.accentBlue}` }}
          >
            <Text color={colorsV2.textDark} size={2}>
              :פרטים נוספים
            </Text>
            <Wrapper gap="0.5rem" direction="column">
              <AreaText
                height="200px"
                width="200px"
                placeholder="מלא כאן פרטים נוספים"
                textAlign="right"
                name="notes"
                color={colorsV2.accentBlue}
                defaultValue={editOrder && editOrder.notes}
              />
            </Wrapper>
          </Wrapper>
          <Wrapper
            padding="0 0 0 1rem"
            direction="column"
            align="end"
            gap="1rem"
            style={{ borderLeft: `solid 2px ${colorsV2.accentBlue}` }}
          >
            <Text color={colorsV2.textDark} size={2}>
              :פרטי המדף
            </Text>
            <Wrapper gap="0.5rem">
              <Input
                required
                textAlign="right"
                name="length"
                color={colorsV2.accentBlue}
                defaultValue={editOrder && editOrder.shelf_length}
                width={editOrder && "5rem"}
              />
              <Text color={colorsV2.textDark}>אורך המדף</Text>
            </Wrapper>
            <Wrapper gap="0.5rem">
              <Input
                required
                textAlign="right"
                name="depth"
                color={colorsV2.accentBlue}
                defaultValue={editOrder && editOrder.shelf_depth}
                width={editOrder && "5rem"}
              />
              <Text color={colorsV2.textDark}>רוחב המדף</Text>
            </Wrapper>
            <Wrapper gap="0.5rem">
              <Input
                required
                textAlign="right"
                name="color"
                color={colorsV2.accentBlue}
                defaultValue={editOrder && editOrder.color}
                width={editOrder && "5rem"}
              />
              <Text color={colorsV2.textDark}>צבע המדף</Text>
            </Wrapper>
            <Wrapper gap="0.5rem">
              <Checkbox
                type="checkbox"
                name="consealed"
                style={{ scale: "1.5" }}
                defaultChecked={editOrder && editOrder.conseeled}
              />
              <Text color={colorsV2.textDark}>תלייה נסתרת</Text>
            </Wrapper>
          </Wrapper>
          <Wrapper
            margin="0 1rem"
            padding="0 0 0 1rem"
            direction="column"
            align="end"
            gap="1rem"
            style={{ borderLeft: `solid 2px ${colorsV2.accentBlue}` }}
          >
            <Text color={colorsV2.textDark} size={2}>
              :פרטי הלקוח
            </Text>
            <Wrapper gap="0.5rem">
              <Input
                required
                textAlign="right"
                name="name"
                color={colorsV2.accentBlue}
                defaultValue={editOrder && editOrder.name}
              />
              <Text color={colorsV2.textDark}>שם הלקוח</Text>
            </Wrapper>
            <Wrapper gap="0.5rem">
              <Input
                required
                textAlign="right"
                name="phone"
                color={colorsV2.accentBlue}
                defaultValue={editOrder && editOrder.phone_number}
              />
              <Text color={colorsV2.textDark}>מספר טלפון</Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        {children}
      </form>
      {orderCreatedPopUp && (
        <OrderCreatedPopUp
          action={() => setOrderCreatedPopUp(false)}
          success={successfulPost}
        />
      )}
    </>
  );
};

export default CreateOrder;
