import {
   Box,
   Flex,
   Text,
   Image,
   NumberInput,
   NumberInputField,
   NumberInputStepper,
   NumberIncrementStepper,
   NumberDecrementStepper,
   Slider,
   SliderTrack,
   SliderFilledTrack,
   SliderThumb
} from '@chakra-ui/react'

import { useState } from 'react'

export default function MenuItem({ name, price, description, image }) {
   const [quantity, setQuantity] = useState(0)
   const handleChange = value => setQuantity(value)

   return (
      <Box p={5}>
         <Image src={image} borderRadius="4px" />
         <Box display="flex" justifyContent="space-between" alignItems="center">
            <Text fontSize="1.4rem" fontWeight="bold" margin="5px 0">
               {name}
            </Text>
            <Text fontSize="1.3rem">R$ {price.toFixed(2)}</Text>
         </Box>
         <Text color="#ddd">{description}</Text>
         <Flex mt={5}>
            <Slider
               flex="1"
               focusThumbOnChange={false}
               value={quantity}
               ml="1rem"
               onChange={handleChange}
            >
               <SliderTrack>
                  <SliderFilledTrack />
               </SliderTrack>
               <SliderThumb fontSize="sm" boxSize="32px" children={quantity} />
            </Slider>
            <NumberInput
               maxW="100px"
               ml="2rem"
               value={quantity}
               onChange={handleChange}
            >
               <NumberInputField borderRadius="4px" />
               <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
               </NumberInputStepper>
            </NumberInput>
         </Flex>
      </Box>
   )
}
