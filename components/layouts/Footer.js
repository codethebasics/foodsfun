import Link from 'next/link'
import styles from '../../styles/layouts/Footer.module.scss'

import { useEffect, useState } from 'react'
import { Alert, AlertTitle, AlertDescription, Text } from '@chakra-ui/react'
import { useOrderContext } from '/src/context/order.context'
import { Box, Flex, Button } from '@chakra-ui/react'
import { TbBellRinging2 } from 'react-icons/tb'
import { BiFoodMenu } from 'react-icons/bi'
import { GrUnorderedList } from 'react-icons/gr'
import { RiFilePaperLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'
import { ImCheckmark } from 'react-icons/im'
import { CgPlayListCheck } from 'react-icons/cg'
import * as OrderService from '../../services/orders/orders.service'

export default function Footer() {
   const orderContext = useOrderContext()

   const [confirmDialog, setConfirmDialog] = useState(false)

   useEffect(() => {
      const currentOrder = JSON.parse(localStorage.getItem('order'))
      if (currentOrder) {
         orderContext.computeTotal(currentOrder)
      }
   }, [])

   const toggleConfirmDialog = () => {
      setConfirmDialog(!confirmDialog)
   }

   const confirmOrder = () => {
      OrderService.save(orderContext.order)
         .then(response => {
            toggleConfirmDialog()
            orderContext.clearOrder()
         })
         .catch(error => console.log(error))
   }

   return (
      <Box className={styles.footer} display="flex" flexDirection="column">
         {orderContext.total > 0 && (
            <Flex className={styles.subtotal} justifyContent="space-between">
               <Box>
                  <Button
                     size="sm"
                     colorScheme="green"
                     borderRadius="4px"
                     rightIcon={<ImCheckmark />}
                     onClick={toggleConfirmDialog}
                  >
                     Confirmar
                  </Button>
               </Box>
               <Box>R$ {orderContext.total.toFixed(2)}</Box>
            </Flex>
         )}
         <Flex
            padding="10px"
            justifyContent="space-between"
            width="100%"
            className={styles.navlinks}
         >
            <Box
               display="flex"
               flexDirection="column"
               alignItems="center"
               padding="5px"
            >
               <Link href="/">
                  <a>
                     <BiFoodMenu />
                  </a>
               </Link>
            </Box>
            <Box
               display="flex"
               flexDirection="column"
               alignItems="center"
               padding="5px"
            >
               <Link href="/call">
                  <a>
                     <TbBellRinging2 />
                  </a>
               </Link>
            </Box>
            <Box
               display="flex"
               flexDirection="column"
               alignItems="center"
               padding="5px"
            >
               <Link href="/pedidos">
                  <a>
                     <GrUnorderedList />
                  </a>
               </Link>
            </Box>
            <Box
               display="flex"
               flexDirection="column"
               alignItems="center"
               padding="5px"
            >
               <Link href="/comanda">
                  <a>
                     <RiFilePaperLine />
                  </a>
               </Link>
            </Box>
            <Box
               display="flex"
               flexDirection="column"
               alignItems="center"
               padding="5px"
            >
               <Link href="/perfil">
                  <a>
                     <AiOutlineUser />
                  </a>
               </Link>
            </Box>
         </Flex>
         <Alert
            className={styles.confirmDialog}
            status="success"
            variant="solid"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            display={confirmDialog ? 'flex' : 'none'}
         >
            <CgPlayListCheck fontSize="3rem" />
            <AlertTitle mt={2} mb={2} fontSize="lg">
               Confirmar pedido
               <Text pt={5} pb={5} fontSize="3xl" fontWeight="bold">
                  R$ {orderContext.total.toFixed(2)}
               </Text>
            </AlertTitle>
            <AlertDescription maxWidth="sm">
               <Box>Deseja confirmar o pedido?</Box>
               <Flex>
                  <Button
                     colorScheme="red"
                     variant="outline"
                     margin="25px 15px"
                     onClick={toggleConfirmDialog}
                  >
                     Cancelar
                  </Button>
                  <Button
                     colorScheme="green"
                     variant="outline"
                     margin="25px 15px"
                     onClick={confirmOrder}
                  >
                     Confirmar
                  </Button>
               </Flex>
            </AlertDescription>
         </Alert>
      </Box>
   )
}
