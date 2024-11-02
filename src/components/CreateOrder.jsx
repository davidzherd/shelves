import React, { useState } from 'react'
import { Grid } from './Grid'
import { colorsV2 } from '../assets/siteConfig'
import { Text } from './Text'
import { Wrapper } from './Wrapper'
import { AreaText, Input } from './Input'
import { Checkbox } from './Checkbox'
import { Button } from './Button'

const CreateOrder = () => {

    const [orderName, setOrderName] = useState('') //contact info
    const [phoneNumber, setPhoneNumber] = useState('') //contact info
    const [shelfDepth, setShelfDepth] = useState(0.0) //order info
    const [shelfLength, setShelfLength] = useState(0.0) //order info
    const [consealed, setConsealed] = useState(false) //order info
    const [color, setColor] = useState('') //order info
    const [totalPrice, setTotalPrice] = useState(0.0) //order info
    const [description, setDescription] = useState('') //order info

    const handleNumbers = (string)=>{
        const convertedNumber = Number(string)
        return convertedNumber
    }

    return (
        <Wrapper style={{alignItems: 'stretch'}}>
             <Wrapper margin='0 1rem' padding="0 0 0 1rem" direction='column' align='end' gap='1rem' style={{borderLeft: `solid 2px ${colorsV2.accentBlue}`}}>
                <Text color={colorsV2.textDark} size={2}>:מאני טיים</Text>
            <Wrapper gap='0.5rem'>
            <Text color={colorsV2.textDark} size={1.5}>&#8362;</Text>
            <Input width='5rem' color={colorsV2.accentBlue}/>
            <Text color={colorsV2.textDark}>מחיר סופי</Text>
            </Wrapper>
            <Button selected style={{alignSelf:'center', marginBlock:'2rem'}}>יצירת הזמנה</Button>
            </Wrapper>
            <Wrapper margin='0 1rem' padding="0 0 0 1rem" direction='column' align='end' gap='1rem' style={{borderLeft: `solid 2px ${colorsV2.accentBlue}`}}>
                <Text color={colorsV2.textDark} size={2}>:פרטים נוספים</Text>
            <Wrapper gap='0.5rem' direction='column'>
                <AreaText height="200px" width='200px' placeholder='מלא כאן פרטים נוספים' textAlign='right' color={colorsV2.accentBlue}/>
            </Wrapper>
            </Wrapper>
            <Wrapper padding="0 0 0 1rem" direction='column' align='end' gap='1rem' style={{borderLeft: `solid 2px ${colorsV2.accentBlue}`}}>
                <Text color={colorsV2.textDark} size={2}>:פרטי המדף</Text>
            <Wrapper gap='0.5rem'>
                <Input textAlign='right' color={colorsV2.accentBlue}/>
                <Text color={colorsV2.textDark}>אורך המדף</Text>
            </Wrapper>
            <Wrapper gap='0.5rem'>
                <Input textAlign='right' color={colorsV2.accentBlue}/>
                <Text color={colorsV2.textDark}>רוחב המדף</Text>
            </Wrapper>
            <Wrapper gap='0.5rem'>
                <Input textAlign='right' color={colorsV2.accentBlue}/>
                <Text color={colorsV2.textDark}>צבע המדף</Text>
            </Wrapper>
            <Wrapper gap='0.5rem'>
                <Checkbox type='checkbox' style={{scale:"1.5"}}/>
                <Text color={colorsV2.textDark}>תלייה נסתרת</Text>
            </Wrapper>
            </Wrapper>
            <Wrapper margin='0 1rem' padding="0 0 0 1rem" direction='column' align='end' gap='1rem' style={{borderLeft: `solid 2px ${colorsV2.accentBlue}`}}>
                <Text color={colorsV2.textDark} size={2}>:פרטי הלקוח</Text>
            <Wrapper gap='0.5rem'>
                <Input textAlign='right' color={colorsV2.accentBlue}/>
                <Text color={colorsV2.textDark}>שם הלקוח</Text>
            </Wrapper>
            <Wrapper gap='0.5rem'>
                <Input textAlign='right' color={colorsV2.accentBlue}/>
                <Text color={colorsV2.textDark}>מספר טלפון</Text>
            </Wrapper>
            </Wrapper>
        </Wrapper>
  )
}

export default CreateOrder
