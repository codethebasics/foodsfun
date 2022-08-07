import { Box, Flex, Text } from '@chakra-ui/react'
import { useAppContext } from '/src/context/state'

export default function Pedidos() {
   const appContext = useAppContext()

   return (
      <Box display="flex" justifyContent="center" flexDirection="column">
         <Flex
            backgroundColor="dodgerblue"
            width="100%"
            padding="15px"
            justifyContent="center"
         >
            <Text fontWeight="bold" fontSize="1.2rem">
               Pedidos
            </Text>
         </Flex>
         <Box>
            <Box>
               <Text>{JSON.stringify(appContext.pedidos)}</Text>
            </Box>
         </Box>
      </Box>
   )
}
