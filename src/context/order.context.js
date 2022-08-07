import { createContext, useContext } from 'react'
import { useState } from 'react'
const OrderContext = createContext()

export function OrderWrapper({ children }) {
   const [order, setOrder] = useState({})
   const [total, setTotal] = useState(0)

   const addItem = item => {
      const currentOrder = { ...order }

      if (!currentOrder.hasOwnProperty('items')) {
         currentOrder.items = []
      }

      const index = currentOrder.items.findIndex(i => i.id === item.id)

      if (index > -1) {
         currentOrder.items[index].quantity += 1
      } else {
         item.quantity = 1
         currentOrder.items.push(item)
      }
      console.log(currentOrder)
      setOrder(currentOrder)
   }

   const removeItem = item => {
      const currentOrder = { ...order }

      if (!currentOrder.hasOwnProperty('items')) {
         currentOrder.items = []
      }

      const index = currentOrder.items.findIndex(i => i.id === item.id)

      if (index > -1) {
         currentOrder.items[index].quantity > 0
            ? (currentOrder.items[index].quantity -= 1)
            : (currentOrder.items[index].quantity = 0)
      }

      console.log(currentOrder)
      setOrder(currentOrder)
   }

   return (
      <OrderContext.Provider
         value={{ order, setOrder, total, setTotal, addItem, removeItem }}
      >
         {children}
      </OrderContext.Provider>
   )
}

export function useOrderContext() {
   return useContext(OrderContext)
}
