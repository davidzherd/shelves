import { createContext } from 'react';

export const AdminContext = createContext(false);

export const OrdersContext = createContext(
    {totalNumberOrders: 0,
        totalIncome: 0.0,
        allOrders:[],
        updateAllOrders: ()=>{},
        updateIncome: ()=>{},
        updateTotalNumOrders: ()=>{},
        updateDataObject: ()=>{}
    }
)