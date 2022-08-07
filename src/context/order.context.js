import { createContext, useContext } from 'react'
import { useState } from 'react'
const OrderContext = createContext()

/**
 *
 * Contexto de pedido
 *
 */
export function OrderWrapper({ children }) {
   const [order, setOrder] = useState({})
   const [total, setTotal] = useState(0)

   /**
    *
    * Incrementa a quantidade do item
    *
    */
   const addItem = item => {
      // Faz cópia do array de pedidos
      const currentOrder = { ...order }

      // Se não possuir o atributo items, adiciona um
      if (!currentOrder.hasOwnProperty('items')) {
         currentOrder.items = []
      }

      // Procura o o índice o item informado
      const index = currentOrder.items.findIndex(i => i.id === item.id)

      if (index > -1) {
         // Incrementa item caso ele exista
         currentOrder.items[index].quantity += 1
      } else {
         // Caso não exista, adiciona o primeiro
         item.quantity = 1
         currentOrder.items.push(item)
      }
      console.log(currentOrder)
      // Seta o pedido no contexto
      setOrder(currentOrder)

      // Altera o total do pedido
      computeTotal(currentOrder)
   }

   /**
    *
    * Decrementa a quantidade do item
    *
    */
   const removeItem = item => {
      // Faz cópia do array de pedidos
      const currentOrder = { ...order }

      // Se não possuir o atributo items, adiciona um
      if (!currentOrder.hasOwnProperty('items')) {
         currentOrder.items = []
      }

      // Procura o o índice o item informado
      const index = currentOrder.items.findIndex(i => i.id === item.id)

      if (index > -1) {
         // Decrementa item caso ele exista
         currentOrder.items[index].quantity > 0
            ? (currentOrder.items[index].quantity -= 1)
            : (currentOrder.items[index].quantity = 0)
      }
      console.log(currentOrder)
      // Seta o pedido no contexto
      setOrder(currentOrder)

      // Altera o total do pedido
      computeTotal(currentOrder)
   }

   /**
    *
    * Recebe uma ordem e calcula o seu total
    *
    */
   const computeTotal = currentOrder => {
      const total = currentOrder.items
         .map(item => item.price * item.quantity)
         .reduce((total, subtotal) => total + subtotal)

      setTotal(total)
   }

   /**
    *
    * Seta a quantidade de determinado item
    * TODO: testar
    */
   const setItemQuantity = (item, quantity) => {
      // Faz cópia do array de pedidos
      const currentOrder = { ...order }

      // Se não possuir o atributo items, adiciona um
      if (!currentOrder.hasOwnProperty('items')) {
         currentOrder.items = []
      }

      // Procura o o índice o item informado
      const index = currentOrder.items.findIndex(i => i.id === item.id)

      if (index > -1) {
         // Seta quantidade do item
         currentOrder.items[index].quantity = quantity
      }
      console.log(currentOrder)
      // Seta o pedido no contexto
      setOrder(currentOrder)
   }

   return (
      <OrderContext.Provider
         value={{
            order,
            setOrder,
            total,
            setTotal,
            addItem,
            removeItem,
            setItemQuantity
         }}
      >
         {children}
      </OrderContext.Provider>
   )
}

export function useOrderContext() {
   return useContext(OrderContext)
}
