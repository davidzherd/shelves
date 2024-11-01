import React, { useState } from 'react'
import { Wrapper } from './Wrapper'
import { Text, EmptyStateText } from './Text'
import { colorsV2 } from '../assets/siteConfig'
import { Card } from './Card'
import { Grid } from './Grid'
import Table from './Table'
import TotalOrders from './TotalOrders'
import useApi from '../hooks/useApi'
import TotalIncome from './TotalIncome'

const Dashboard = () => {
  const [data,loading,error] = useApi('https://x8ki-letl-twmt.n7.xano.io/api:sQvFNZLW/orders')
  return (
    <Wrapper
     background="transparent" 
     align="center"
     justify="center"
     >
            <div style={{marginTop: "4rem", alignItems:"center", display:"flex", flexDirection:"column", gap:"1rem"}}>
              <Text size={3} color={colorsV2.textLight}>!בואו נעבוד</Text>
              <Grid $columnsTemplate="3fr 1fr" style={{gap:"4rem", justifyContent: "space-evenly", justifyItems: "stretch"}}>
                <Card style={{alignItems:"center", width:"auto", height:"400px", flexDirection:"column", gap:"1rem"}}>
                <Text size={2} color={colorsV2.textLight}>הזמנות שלא הושלמו</Text>
                <hr style={{width:"95%"}}/>
                {loading && <EmptyStateText size={1} color={colorsV2.textDark} customText="Loading..." />}
                {error&& <EmptyStateText size={1} color={colorsV2.textDark} />}
                {data.orders !== undefined && <Table orders={data.orders}/>}
                </Card>
                <Card style={{alignItems:"center", width:"400px", height:"400px", flexDirection:"column", gap:"1rem"}}>
                  <Text size={2} color={colorsV2.textLight}>כל ההזמנות</Text>
                  <hr style={{width:"95%"}}/>
                  {loading && <EmptyStateText size={1} color={colorsV2.textDark} customText="Loading..." />}
                  {error && <EmptyStateText size={1} color={colorsV2.textDark} />}
                  {data.total !== undefined && <TotalOrders numOfOrders ={data.total} />}
                  
                </Card>
                <Card style={{alignItems:"center", width:"400px", height:"400px", flexDirection:"column", gap:"1rem"}}>
                  <Text size={2} color={colorsV2.textLight}>הכנסות</Text>
                  <hr style={{width:"95%"}}/>
                  {loading && <EmptyStateText size={1} color={colorsV2.textDark} customText="Loading..." />}
                  {error && <EmptyStateText size={1} color={colorsV2.textDark} />}
                  {data.income !== undefined && <TotalIncome income={data.income.total_income}/>}
                </Card>
              </Grid>
            </div>
          </Wrapper>
  )
}

export default Dashboard
