import React from 'react'
import { Wrapper } from './Wrapper'
import { Text } from './Text'
import { colors } from '../assets/siteConfig'

const CreateOrder = () => {
  return (
    <Wrapper background={"transparent"}>
            <div style={{marginTop: "4rem"}}>
              <Text size={4} shadow color={colors.lightGreen}>TEST</Text>
            </div>
          </Wrapper>
  )
}

export default CreateOrder
