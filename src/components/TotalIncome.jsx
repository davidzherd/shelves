import React from 'react'
import { Text } from './Text'
import { colorsV2, formatPrice } from '../assets/siteConfig'
import { Wrapper } from './Wrapper'

const TotalIncome = ({ income }) => {
  const formattedIncome = formatPrice(income)
  return (
    <Wrapper
    direction="column"
    gap="0.5rem">
        <Text size={2} color={colorsV2.textLight}>הורווחו סה"כ </Text>
        <Text size={4} color={colorsV2.accentPurple}>&#8362;{formattedIncome}</Text>
        <Text size={2} color={colorsV2.textLight}>מתחילת העבודה</Text>
    </Wrapper>
  )
}

export default TotalIncome
