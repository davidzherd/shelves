import React from 'react'
import styled from 'styled-components'
import { Text } from './Text';
import { colorsV2 } from '../assets/siteConfig';
import Order from './Order';
import { FaCalendar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiCashRegister } from "react-icons/pi";
export const TableHeader = styled.div`
width: 95%;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
background-color: ${colorsV2.accentBlue};
justify-items: center;
align-items: center;
margin-bottom: 0.5rem;
padding: 0.5rem;
border-radius: 0.5rem;
`;
export const TableBody = styled.div`
width: 100%;
height: 23%;
overflow-y: scroll;
`;
const Table = ({ orders }) => {
  return (
    <div style={{width:"100%"}}>
        <TableHeader>
            <Text size={1.1} color={colorsV2.darkNavi}>מחיר <PiCashRegister size={16} /></Text>
            <Text size={1.1} color={colorsV2.darkNavi}>סטטוס <RiArrowDropDownLine size={16} /></Text>
            <Text size={1.1} color={colorsV2.darkNavi}>לקוח <IoPersonSharp size={16} /></Text>
            <Text size={1.1} color={colorsV2.darkNavi}>תאריך <FaCalendar size={16} /></Text>
        </TableHeader>
        <TableBody>
          {orders.map((order)=>{return <Order key={order.id} order={order}/>})}
        </TableBody>
    </div>
  )
}

export default Table
