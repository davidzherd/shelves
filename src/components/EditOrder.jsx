import React, { useState } from "react";
import { StyledPopUp } from "./PopUp";
import { Wrapper } from "./Wrapper";
import { Text } from "./Text";
import { colorsV2 } from "../assets/siteConfig";
import { Button } from "./Button";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { RiInformation2Line } from "react-icons/ri";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { statusTypes } from "../assets/siteConfig";
import CreateOrder from "./CreateOrder";

// Should edit the create order to include a save button ( because this one probably won't work)
const EditOrder = ({ order, onClose }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleClose = () => {
    //TODO: Can add code to popup "are you sure" modal if user in edit mode.
    setIsEditMode(false);
    onClose();
  };
  const handleEdit = () => {
    setIsEditMode((prev) => !prev);
  };

  return (
    <StyledPopUp>
      <Wrapper
        padding="1rem"
        direction="column"
        background="white"
        style={{ borderRadius: "12px" }}
      >
        <Text color={colorsV2.textLight} size={2}>
          פרטי הזמנה
        </Text>
        <Wrapper justify="space-around" width="100%">
          <Wrapper gap="0.5rem">
            <Text color={colorsV2.textDark}>{statusTypes[order.status]}</Text>
            <Text size={1.1} color={colorsV2.textDark}>
              :סטטוס ההזמנה
            </Text>
          </Wrapper>
          <Wrapper gap="0.5rem">
            <Text color={colorsV2.textDark}>{order.date}</Text>
            <Text size={1.1} color={colorsV2.textDark}>
              :תאריך יצירת ההזמנה
            </Text>
          </Wrapper>
        </Wrapper>
        <hr style={{ width: "95%", marginBottom: "1rem" }} />
        {!isEditMode && (
          <Wrapper padding="1.5rem" style={{ alignItems: "stretch" }}>
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
                <FaMoneyBillWave />
              </Text>
              <Wrapper gap="0.5rem">
                <Text color={colorsV2.textDark}>{order.price}&#8362;</Text>
                <Text size={1.1} color={colorsV2.textDark}>
                  :מחיר סופי
                </Text>
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
                :פרטים נוספים
                <MdOutlineSpeakerNotes />
              </Text>
              <Wrapper gap="0.5rem" direction="column">
                <Text
                  color={colorsV2.textDark}
                  style={{ maxWidth: "25ch", wordWrap: "break-word" }}
                >
                  {order.notes != "" ? order.notes : "לא קיימים פרטים נוספים"}
                </Text>
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
                <RiInformation2Line />
              </Text>
              <Wrapper gap="0.5rem">
                <Text color={colorsV2.textDark}>ס"מ</Text>
                <Text color={colorsV2.textDark}>{order.shelf_length}</Text>
                <Text size={1.1} color={colorsV2.textDark}>
                  :אורך המדף
                </Text>
              </Wrapper>
              <Wrapper gap="0.5rem">
                <Text color={colorsV2.textDark}>ס"מ</Text>
                <Text color={colorsV2.textDark}>{order.shelf_depth}</Text>
                <Text size={1.1} color={colorsV2.textDark}>
                  :רוחב המדף
                </Text>
              </Wrapper>
              <Wrapper gap="0.5rem">
                <Text color={colorsV2.textDark}>{order.color}</Text>
                <Text size={1.1} color={colorsV2.textDark}>
                  :צבע המדף
                </Text>
              </Wrapper>
              <Wrapper gap="0.5rem">
                <Text color={colorsV2.textDark}>
                  {order.conseeled ? "תלייה נסתרת" : "תלייה רגילה"}
                </Text>
                <Text size={1.1} color={colorsV2.textDark}>
                  :סוג תלייה
                </Text>
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
                <BsFillPersonBadgeFill />
              </Text>
              <Wrapper gap="0.5rem">
                <Text color={colorsV2.textDark}>{order.name}</Text>
                <Text size={1.1} color={colorsV2.textDark}>
                  :שם הלקוח
                </Text>
              </Wrapper>
              <Wrapper gap="0.5rem">
                <Text color={colorsV2.textDark}>{order.phone_number}</Text>
                <Text size={1.1} color={colorsV2.textDark}>
                  :מספר טלפון
                </Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        )}
        {isEditMode && (
          <CreateOrder editOrder={order} onEditClose={onClose}>
            <Wrapper gap="1rem" margin="1rem">
              <Button type="submit" selected>
                שמירה
              </Button>
            </Wrapper>
          </CreateOrder>
        )}
        <Wrapper gap="1rem" margin="1rem">
          <Button onClick={handleClose}>סגירה</Button>
          {!isEditMode && (
            <Button selected onClick={handleEdit}>
              עריכה
            </Button>
          )}
          {isEditMode && <Button onClick={handleEdit}>ביטול</Button>}
        </Wrapper>
      </Wrapper>
    </StyledPopUp>
  );
};

export default EditOrder;
