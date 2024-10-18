import React from 'react'
import { Wrapper } from './Wrapper'
import { Text } from './Text'
import { colors } from '../assets/siteConfig'

const Dashboard = () => {
  return (
    <Wrapper background={"transparent"}>
            <div style={{marginTop: "4rem"}}>
              <Text size={3} shadow color={colors.lightGreen}>Admin Dashboard</Text>
              
            </div>
          </Wrapper>
  )
}

export default Dashboard
