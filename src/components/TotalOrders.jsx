import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { colorsV2 } from "../assets/siteConfig";
import { Wrapper } from "./Wrapper";

const TotalOrders = ({ numOfOrders, action }) => {
  return (
    <Wrapper direction="column" gap="0.5rem">
      <Text size={2} color={colorsV2.textLight}>
        בוצעו סה"כ
      </Text>
      <Text size={4} color={colorsV2.accentPurple}>
        {numOfOrders}
      </Text>
      <Text size={2} color={colorsV2.textLight}>
        הזמנות
      </Text>
      <Button onClick={action}>לצפייה בכל ההזמנות</Button>
    </Wrapper>
  );
};

export default TotalOrders;
