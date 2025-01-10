import { StyledPopUp } from "./PopUp";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Wrapper } from "./Wrapper";
import { Text } from "./Text";
import { colorsV2 } from "../assets/siteConfig";
import { Button } from "./Button";

const OrderCreatedPopUp = ({ action, success }) => {
  return (
    <StyledPopUp>
      <Wrapper
        width="800px"
        direction="column"
        background="white"
        style={{ borderRadius: "12px" }}
      >
        <DotLottieReact
          src={
            success
              ? "https://lottie.host/175c64d8-fc06-4295-b157-9d09b8f08337/iKhM6kkRpf.lottie"
              : "https://lottie.host/8639ec7b-01f8-4c04-8ab4-fbd65f7d903c/dEQeyt3dtu.lottie"
          }
          autoplay
        />
        <Text
          size={3}
          color={success ? colorsV2.greenSuccess : colorsV2.redFailed}
          style={{ marginBottom: "1rem" }}
        >
          {success ? "!הזמנה נוצרה בהצלחה" : "יצירת ההזמנה נכשלה"}
        </Text>
        <Button margin="0 0 1rem 0" onClick={action}>
          חזרה למערכת
        </Button>
      </Wrapper>
    </StyledPopUp>
  );
};

export default OrderCreatedPopUp;
