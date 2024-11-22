import React, { useContext, useState } from 'react'
import { colorsV2 } from '../assets/siteConfig'
import { Text } from './Text'
import { Wrapper } from './Wrapper'
import { AreaText, Input } from './Input'
import { Checkbox } from './Checkbox'
import { Button } from './Button'
import { postNewOrder } from '../api/api'
import { OrdersContext } from '../Context'
import OrderCreatedPopUp from './OrderCreatedPopUp'

const CreateOrder = () => {
    const [orderCreatedPopUp, setOrderCreatedPopUp] = useState(false)
    const ordersCtx = useContext(OrdersContext)

    const handleNumbers = (string)=>{
        return Number(string)
    }

    const handleCreateOrder = async (e)=>{
        e.preventDefault()
        const formPrice = handleNumbers(e.target[0].value)
        const formNotes = e.target[2].value
        const formLength = handleNumbers(e.target[3].value)
        const formDepth = handleNumbers(e.target[4].value)
        const formColor = e.target[5].value
        const formConsealed = e.target[6].checked
        const formName = e.target[7].value
        const formPhone = e.target[8].value
        const newData = await postNewOrder(formDepth, formLength, formConsealed, formColor, formNotes, formPrice, formPhone, formName)
        newData && ordersCtx.updateDataObject(newData)
        document.getElementById("orderForm").reset();
        setOrderCreatedPopUp(true)
    }

    return (
        <>
        <form onSubmit={handleCreateOrder} id='orderForm'>
        <Wrapper style={{alignItems: 'stretch'}}>
             <Wrapper margin='0 1rem' padding="0 0 0 1rem" direction='column' align='end' gap='1rem' style={{borderLeft: `solid 2px ${colorsV2.accentBlue}`}}>
                <Text color={colorsV2.textDark} size={2}>:מאני טיים</Text>
            <Wrapper gap='0.5rem'>
            <Text color={colorsV2.textDark} size={1.5}>&#8362;</Text>
            <Input required width='5rem' color={colorsV2.accentBlue} id='price' />
            <Text color={colorsV2.textDark}>מחיר סופי</Text>
            </Wrapper>
            <Button selected style={{alignSelf:'center', marginBlock:'2rem'}}>יצירת הזמנה</Button>
            </Wrapper>
            <Wrapper margin='0 1rem' padding="0 0 0 1rem" direction='column' align='end' gap='1rem' style={{borderLeft: `solid 2px ${colorsV2.accentBlue}`}}>
                <Text color={colorsV2.textDark} size={2}>:פרטים נוספים</Text>
            <Wrapper gap='0.5rem' direction='column'>
                <AreaText height="200px" width='200px' placeholder='מלא כאן פרטים נוספים' textAlign='right' id='notes' color={colorsV2.accentBlue}/>
            </Wrapper>
            </Wrapper>
            <Wrapper padding="0 0 0 1rem" direction='column' align='end' gap='1rem' style={{borderLeft: `solid 2px ${colorsV2.accentBlue}`}}>
                <Text color={colorsV2.textDark} size={2}>:פרטי המדף</Text>
            <Wrapper gap='0.5rem'>
                <Input required textAlign='right' id='length' color={colorsV2.accentBlue}/>
                <Text color={colorsV2.textDark}>אורך המדף</Text>
            </Wrapper>
            <Wrapper gap='0.5rem'>
                <Input required textAlign='right' id='depth' color={colorsV2.accentBlue}/>
                <Text color={colorsV2.textDark}>רוחב המדף</Text>
            </Wrapper>
            <Wrapper gap='0.5rem'>
                <Input required textAlign='right' id='color' color={colorsV2.accentBlue}/>
                <Text color={colorsV2.textDark}>צבע המדף</Text>
            </Wrapper>
            <Wrapper gap='0.5rem'>
                <Checkbox type='checkbox' id='consealed' style={{scale:"1.5"}}/>
                <Text color={colorsV2.textDark}>תלייה נסתרת</Text>
            </Wrapper>
            </Wrapper>
            <Wrapper margin='0 1rem' padding="0 0 0 1rem" direction='column' align='end' gap='1rem' style={{borderLeft: `solid 2px ${colorsV2.accentBlue}`}}>
                <Text color={colorsV2.textDark} size={2}>:פרטי הלקוח</Text>
            <Wrapper gap='0.5rem'>
                <Input required textAlign='right' id='name' color={colorsV2.accentBlue}/>
                <Text color={colorsV2.textDark}>שם הלקוח</Text>
            </Wrapper>
            <Wrapper gap='0.5rem'>
                <Input required textAlign='right' id='phone' color={colorsV2.accentBlue}/>
                <Text color={colorsV2.textDark}>מספר טלפון</Text>
            </Wrapper>
            </Wrapper>
        </Wrapper>
        </form>
        {orderCreatedPopUp && <OrderCreatedPopUp action={()=>setOrderCreatedPopUp(false)} success={false} />}
        </>
  )
}

export default CreateOrder
