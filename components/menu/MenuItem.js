import {
   Box,
   Flex,
   Button,
   Text,
   Image,
   Slider,
   SliderTrack,
   SliderFilledTrack,
   SliderThumb
} from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { FaMinus } from 'react-icons/fa'
import { useOrderContext } from '../../src/context/order.context'

export default function MenuItem({
   id,
   name,
   price,
   description,
   image,
   onAdd,
   onRemove,
   onSet
}) {
   const [quantity, setQuantity] = useState(0)

   const orderContext = useOrderContext()

   useEffect(() => {
      const currentOrder = JSON.parse(localStorage.getItem('order'))
      if (currentOrder && currentOrder.items.length) {
         const currentItem = currentOrder.items.find(item => item.id === id)
         if (currentItem) {
            setQuantity(currentItem.quantity)
            orderContext.setOrder(currentOrder)
         }
      }
   }, [])

   const handleChange = value => {
      setQuantity(value)
   }

   const add = () => {
      if (quantity < 20) {
         handleChange(quantity + 1)
         onAdd({
            id: id,
            name: name,
            price: price,
            description: description,
            image: image,
            quantity: quantity + 1
         })
      }
   }

   const sub = () => {
      if (quantity > 0) {
         handleChange(quantity - 1)
         onRemove({
            id: id,
            name: name,
            price: price,
            description: description,
            image: image,
            quantity: quantity - 1
         })
      }
   }

   const set = value => {
      handleChange(value)
      onSet({
         id: id,
         name: name,
         price: price,
         description: description,
         image: image,
         quantity: value
      })
   }

   return (
      <Box p={5}>
         <Image src={image} borderRadius="4px" alt="Menu item" />
         <Box display="flex" justifyContent="space-between" alignItems="center">
            <Text fontSize="1.4rem" fontWeight="bold" margin="5px 0">
               {name}
            </Text>
            <Text fontSize="1.3rem">R$ {price.toFixed(2)}</Text>
         </Box>
         <Text color="#ddd">{description}</Text>
         <Flex mt={5} alignItems="center">
            <Button colorScheme="blackAlpha" size="sm" mr={3} onClick={sub}>
               <FaMinus />
            </Button>
            <Slider
               flex="1"
               focusThumbOnChange={false}
               value={quantity}
               ml="1rem"
               onChange={set}
               max={20}
               mr={5}
            >
               <SliderTrack bg="#444">
                  <SliderFilledTrack bg="#fe8100" />
               </SliderTrack>
               <SliderThumb
                  fontSize="sm"
                  boxSize="32px"
                  bg="#fe8100"
                  color="#fff"
               >
                  {quantity}
               </SliderThumb>
            </Slider>
            <Button colorScheme="blackAlpha" size="sm" ml={3} onClick={add}>
               <BsPlusLg />
            </Button>
         </Flex>
      </Box>
   )
}
