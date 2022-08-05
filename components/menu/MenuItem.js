import { Box, Text, Image } from '@chakra-ui/react'

export default function MenuItem({ name, price, description, image }) {
   return (
      <Box p={5}>
         <Image src={image} borderRadius="4px" />
         <Box display="flex" justifyContent="space-between" alignItems="center">
            <Text fontSize="1.4rem" fontWeight="bold" margin="5px 0">
               {name}
            </Text>
            <Text fontSize="1.3rem">{price}</Text>
         </Box>
         <Text color="#ddd">{description}</Text>
      </Box>
   )
}
