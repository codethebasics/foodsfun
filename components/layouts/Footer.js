import styles from '../../styles/layouts/Footer.module.scss'

import { Box, Text } from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'

export default function Footer() {
   return (
      <Box
         padding="10px 15px"
         className={styles.footer}
         display="flex"
         justifyContent="space-between"
      >
         <Box display="flex" flexDirection="column" alignItems="center">
            <SmallCloseIcon />
            <Text fontSize="sm">Início</Text>
         </Box>
         <Box display="flex" flexDirection="column" alignItems="center">
            <SmallCloseIcon />
            <Text fontSize="sm">Garçom</Text>
         </Box>
         <Box display="flex" flexDirection="column" alignItems="center">
            <SmallCloseIcon />
            <Text fontSize="sm">Pedidos</Text>
         </Box>
         <Box display="flex" flexDirection="column" alignItems="center">
            <SmallCloseIcon />
            <Text fontSize="sm">Comanda</Text>
         </Box>
         <Box display="flex" flexDirection="column" alignItems="center">
            <SmallCloseIcon />
            <Text fontSize="sm">Perfil</Text>
         </Box>
      </Box>
   )
}
