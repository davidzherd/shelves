import React from 'react'
import { Card } from './Card'
import { Text } from './Text'
import { VscClose } from 'react-icons/vsc'
import { Input } from './Input'
import { Button } from './Button'
import { colors } from '../assets/siteConfig'
import ConstructionState from './ConstructionState'

const ChangeSettings = ({close}) => {
  return (
    <Card className="message" style={{flexDirection: "column", gap: "2rem"}}>
        <div style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>
        <Text color={colors.darkGreen} weight={"500"} scale={2}>Edit price settings</Text>
        </div>
        <div style={{display: "flex",flexDirection: "column", gap: "1rem", alignItems:"center", justifyContent:"center", textAlign:"center"}}>
        <Text color={colors.navi} weight={"500"} size={4}>This part of the app is still in development!</Text>
        <Text color={colors.navi} weight={"300"}>But you will be glad to know that your authentication passed succesfully!</Text>
        <ConstructionState/>
        <Button style={{background:"ffe700"}} onClick={close}>Yay, take me back!</Button>

        </div>
      </Card>
  )
}

export default ChangeSettings
