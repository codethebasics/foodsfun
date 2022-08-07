import { Box, InputGroup, InputRightElement, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function Search({ filter }) {
   return (
      <Box color="#fff">
         <InputGroup size="sm" border="1px solid #444" borderRadius="4px">
            <Input
               placeholder="Pesquisar"
               focusBorderColor="#fe8100"
               border="0"
               onChange={e => filter(e.target.value?.toLowerCase())}
            />
            <InputRightElement pointerEvents="none">
               <SearchIcon />
            </InputRightElement>
         </InputGroup>
      </Box>
   )
}
