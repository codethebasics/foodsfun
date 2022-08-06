import styles from '../../styles/layouts/Footer.module.scss'

import { Box, Text, Flex } from '@chakra-ui/react'
import { TbBellRinging2 } from 'react-icons/tb'
import { BiFoodMenu } from 'react-icons/bi'
import { GrUnorderedList } from 'react-icons/gr'
import { RiFilePaperLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'

export default function Footer({ subtotal }) {
   return (
      <Box className={styles.footer} display="flex" flexDirection="column">
         <Flex className={styles.subtotal} justifyContent="space-between">
            <Box>Total</Box>
            <Box>R$ {subtotal}</Box>
         </Flex>
         <Flex
            padding="10px 15px"
            justifyContent="space-between"
            width="100%"
            className={styles.navlinks}
         >
            <Box display="flex" flexDirection="column" alignItems="center">
               <BiFoodMenu />
               <Text fontSize="xs" textTransform="uppercase">
                  Cardápio
               </Text>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
               <TbBellRinging2 />
               <Text fontSize="xs" textTransform="uppercase">
                  Garçom
               </Text>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
               <GrUnorderedList />
               <Text fontSize="xs" textTransform="uppercase">
                  Pedidos
               </Text>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
               <RiFilePaperLine />
               <Text fontSize="xs" textTransform="uppercase">
                  Comanda
               </Text>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
               <AiOutlineUser />
               <Text fontSize="xs" textTransform="uppercase">
                  Perfil
               </Text>
            </Box>
         </Flex>
      </Box>
   )
}
