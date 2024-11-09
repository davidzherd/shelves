import React, { useEffect, useState } from 'react'
import { Wrapper } from './Wrapper'
import { Text, EmptyStateText } from './Text'
import { colorsV2 } from '../assets/siteConfig'
import { Card } from './Card'
import { Grid } from './Grid'
import Table from './Table'
import TotalOrders from './TotalOrders'
import useApi from '../hooks/useApi'
import TotalIncome from './TotalIncome'
import { OrdersContext } from '../Context'
import CreateOrder from './CreateOrder'

const Dashboard = () => {

  const [data,loading,error,setData] = useApi('https://x8ki-letl-twmt.n7.xano.io/api:sQvFNZLW/orders')
  const [allOrders, setAllOrders] = useState([])
  const [numOrders, setNumOrders] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0.0)

  useEffect(()=>{
      data.orders && setAllOrders(data.orders)
      data.total && setNumOrders(data.total)
      data.income && setTotalIncome(data.income.total_income)
  },[data])
  
  return (
    <OrdersContext.Provider value={{allOrders: allOrders, totalIncome:totalIncome, totalNumberOrders:numOrders, updateAllOrders:(array)=>setAllOrders(array), updateIncome: (number)=>setTotalIncome(number), updateTotalNumOrders: (number)=>setAllOrders(number), updateDataObject: (object)=>setData(object)}}>
    <Wrapper
     background="transparent" 
     align="center"
     justify="center"
     >
            <div style={{marginTop: "4rem", alignItems:"center", display:"flex", flexDirection:"column", gap:"1rem"}}>
              <Text size={3} color={colorsV2.textLight}>לוח בקרה</Text>
              <Grid $columnsTemplate="3fr 1fr" style={{gap:"4rem", justifyContent: "space-evenly", justifyItems: "stretch"}}>
                <Card style={{alignItems:"center", width:"auto", height:"400px", flexDirection:"column", gap:"1rem"}}>
                <Text size={2} color={colorsV2.textLight}>הזמנות שלא הושלמו</Text>
                <hr style={{width:"95%"}}/>
                {loading && <EmptyStateText size={1} color={colorsV2.textDark} customText="Loading..." />}
                {error && <EmptyStateText size={1} color={colorsV2.textDark} />}
                {data.orders && <Table orders={allOrders} filter="done"/>}
                </Card>
                <Card style={{alignItems:"center", width:"400px", height:"400px", flexDirection:"column", gap:"1rem"}}>
                  <Text size={2} color={colorsV2.textLight}>כל ההזמנות</Text>
                  <hr style={{width:"95%"}}/>
                  {loading && <EmptyStateText size={1} color={colorsV2.textDark} customText="Loading..." />}
                  {error && <EmptyStateText size={1} color={colorsV2.textDark} />}
                  {data.total && <TotalOrders numOfOrders ={numOrders} />}
                  
                </Card>
                <Card style={{alignItems:"end", width:"auto", height:"400px", flexDirection:"column", gap:"1rem"}}>
                <Text side='center' size={2} color={colorsV2.textLight}>יצירת הזמנה חדשה</Text>
                <hr style={{width:"95%"}}/>
                <CreateOrder/>
                </Card>
                <Card style={{alignItems:"center", width:"400px", height:"400px", flexDirection:"column", gap:"1rem"}}>
                  <Text size={2} color={colorsV2.textLight}>הכנסות</Text>
                  <hr style={{width:"95%"}}/>
                  {loading && <EmptyStateText size={1} color={colorsV2.textDark} customText="Loading..." />}
                  {error && <EmptyStateText size={1} color={colorsV2.textDark} />}
                  {data.income  && <TotalIncome income={totalIncome}/>}
                </Card>
                
              </Grid>
            </div>
          </Wrapper>
          </OrdersContext.Provider>
  )
}

export default Dashboard
