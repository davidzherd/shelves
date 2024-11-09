import React, { act } from 'react'
import { StyledPopUp } from './PopUp'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Wrapper } from './Wrapper';
import { Text } from './Text';
import { colorsV2 } from '../assets/siteConfig';
import { Button } from './Button';


const OrderCreatedPopUp = ({action}) => {

  const handleClose = ()=>{
    action()
  }

  return (
    <StyledPopUp>
        <Wrapper width="800px" direction="column" background="white" style={{borderRadius:"12px"}}>
        <DotLottieReact
            src="https://lottie.host/175c64d8-fc06-4295-b157-9d09b8f08337/iKhM6kkRpf.lottie"
            autoplay
            />
        <Text size={3} color={colorsV2.greenSuccess} style={{marginBottom:"1rem"}}>!הזמנה נוצרה בהצלחה</Text>
        <Button margin="0 0 1rem 0" onClick={handleClose}>חזרה למערכת</Button>
        </Wrapper>
    </StyledPopUp>
  )
}

export default OrderCreatedPopUp
