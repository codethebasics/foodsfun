import {
   Box,
   Flex,
   Text,
   TableContainer,
   Table,
   Thead,
   Tbody,
   Tfoot,
   Tr,
   Th,
   Td
} from '@chakra-ui/react'
import { useEffect } from 'react'

export default function Pedidos() {
   useEffect(() => {
      const fetchOrders = async () => {}
      fetchOrders()
   }, [])

   const orderSubmitted = {
      id: 1,
      user: 1,
      client: 1,
      items: [
         {
            id: 1,
            name: 'Hamburger simples',
            image: 'https://img.freepik.com/fotos-gratis/hamburguer-de-carne-com-salada-de-queijo-e-tomate-em-piso-escuro_140725-89524.jpg?w=2000',
            price: 16.0,
            description:
               'Burger Angus (160g), queijo prato, molho Fanis, maiosese e pão brioche',
            quantity: 10,
            total: 160.0
         },
         {
            id: 2,
            name: 'Pizza',
            image: 'https://diaadianoticia.com.br/wp-content/uploads/2022/07/pizza-site-or.jpg',
            price: 20.0,
            description: 'Peperonni, pimentão, queijo e molho de tomate',
            quantity: 10,
            total: 200.0
         },
         {
            id: 3,
            name: 'Pastel',
            image: 'https://www.comidaereceitas.com.br/wp-content/uploads/2007/11/Pastel_feiraaoo.jpg',
            price: 5.0,
            description: 'Carne, queijo, frango c/ catupiry',
            quantity: 10,
            total: 50.0
         }
      ],
      total: 410.0,
      status: 0
   }

   const renderOrderStatus = () => {
      switch (orderSubmitted.status) {
         case 0:
            return 'Em análise'
         case 1:
            return 'Confirmado'
         case 2:
            return 'Cancelado'
      }
   }

   const getOrderStatusColor = () => {
      switch (orderSubmitted.status) {
         case 0:
            return '#cac032'
         case 1:
            return '#64aa64'
         case 2:
            return '#f8564a'
      }
   }

   return (
      <Box display="flex" justifyContent="center" flexDirection="column">
         <Flex
            px={5}
            my={5}
            justifyContent="space-between"
            alignItems="center"
            backgroundColor="#171717"
            borderRadius="4px"
         >
            <Text
               fontSize="0.8rem"
               textTransform="uppercase"
               color="#777"
               fontWeight="bold"
            >
               Código do pedido
            </Text>
            <Text
               fontSize="1.5rem"
               textTransform="uppercase"
               color="#777"
               fontWeight="bold"
            >
               #{orderSubmitted?.id}
            </Text>
         </Flex>
         <Flex justifyContent="center">
            <Text
               mx={5}
               mt={5}
               padding="2.5px 10px"
               borderRadius="4px"
               color="#000"
               fontWeight="bold"
               backgroundColor={getOrderStatusColor()}
            >
               {renderOrderStatus()}
            </Text>
         </Flex>
         <TableContainer py={5}>
            <Table size="sm" colorScheme="whiteAlpha">
               <Thead>
                  <Tr>
                     <Th>Item</Th>
                     <Th isNumeric>Quantidade</Th>
                     <Th isNumeric>R$</Th>
                  </Tr>
               </Thead>
               <Tbody>
                  {orderSubmitted.items.map((item, key) => (
                     <Tr key={key}>
                        <Td
                           textDecoration={
                              orderSubmitted.status === 2
                                 ? 'line-through'
                                 : 'none'
                           }
                        >
                           {item.name}
                        </Td>
                        <Td isNumeric>{item.quantity}</Td>
                        <Td
                           textDecoration={
                              orderSubmitted.status === 2
                                 ? 'line-through'
                                 : 'none'
                           }
                           isNumeric
                        >
                           {item.price.toFixed(2)}
                        </Td>
                     </Tr>
                  ))}
               </Tbody>
               <Tfoot>
                  <Tr>
                     <Th>
                        <Text>Total</Text>
                     </Th>
                     <Th colSpan={2} isNumeric>
                        <Text>
                           R${' '}
                           {orderSubmitted.status !== 2
                              ? orderSubmitted.items
                                   .map(item => item.price * item.quantity)
                                   .reduce(
                                      (total, subtotal) => total + subtotal
                                   )
                                   .toFixed(2)
                              : 0}
                        </Text>
                     </Th>
                  </Tr>
               </Tfoot>
            </Table>
         </TableContainer>
      </Box>
   )
}
