import { Box, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { listItems } from '../services/items/items.service'
import { useAppContext } from '../src/context/state'

import MenuItem from '../components/menu/MenuItem'
import Search from '../components/util/Search'

export default function Home() {
   const appContext = useAppContext()

   const [searchQuery, setSearchQuery] = useState('')
   const [menuItems, setMenuItems] = useState([])
   const [menuItemsAdded, setMenuItemsAdded] = useState([])
   const [orderTotal, setOrderTotal] = useState(0)

   useEffect(() => {
      const fetchItems = async () => {
         const items = await listItems()
         setMenuItems(items)
      }
      fetchItems()
   }, [])

   const addItemToOrder = item => {
      // TODO: concertar cálculo de total
      const currentOrder = [...menuItemsAdded]
      const itemIndex = currentOrder.findIndex(i => i.id === item.id)
      if (itemIndex == -1) {
         setMenuItemsAdded(oldArray => [...oldArray, item])
         console.log('total primeiro')
         const total = item.price * item.quantity
         setOrderTotal(total)
         appContext.setTotal(total)
      } else {
         currentOrder[itemIndex].quantity = item.quantity
         setMenuItemsAdded(currentOrder)
         console.log('total restante')
         console.log(menuItemsAdded)
         const total = currentOrder
            .map(item => item.price * item.quantity)
            .reduce((total, current) => total + current)
         setOrderTotal(total)
         appContext.setTotal(total)
      }
   }

   return (
      <Box>
         <Box>
            <Image
               alt="banner"
               src="https://img.freepik.com/premium-vector/restaurant-mural-wallpaper_23-2148685950.jpg?w=1480"
               width="100%"
               borderBottom="2px solid #fe8100"
            />
         </Box>
         <Box px={5} pt={5}>
            <Search filter={setSearchQuery} />
         </Box>
         <Box>
            {menuItems.length &&
               menuItems
                  .filter(item =>
                     item.name.toLowerCase().startsWith(searchQuery)
                  )
                  .map((item, key) => {
                     return (
                        <MenuItem
                           key={key}
                           id={item.id}
                           name={item.name}
                           image={item.image}
                           price={item.price}
                           description={item.description}
                           onAdd={addItemToOrder}
                        />
                     )
                  })}
         </Box>
      </Box>
   )
}
