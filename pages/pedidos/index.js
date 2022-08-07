import { Box, Flex, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import * as OrderService from '../../services/orders/orders.service'

export default function Pedidos() {
   useEffect(() => {
      const fetchOrders = async () => {
         const orders = await OrderService.list()
         console.log(orders)
      }
      fetchOrders()
   }, [])

   return (
      <Box display="flex" justifyContent="center" flexDirection="column">
         <Flex width="100%" padding="15px" justifyContent="center">
            <Text fontWeight="bold" fontSize="1.2rem">
               Pedidos
            </Text>
         </Flex>
         <Box>
            <Box>
               <Text></Text>
            </Box>
         </Box>
      </Box>
   )
}
