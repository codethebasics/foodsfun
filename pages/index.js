import { Box, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { listItems } from '../services/items/items.service'
import { useOrderContext } from '../src/context/order.context'

import MenuItem from '../components/menu/MenuItem'
import Search from '../components/util/Search'

export default function Home() {
   const orderContext = useOrderContext()

   const [searchQuery, setSearchQuery] = useState('')
   const [menuItems, setMenuItems] = useState([])
   // const [menuItemsAdded, setMenuItemsAdded] = useState([])
   // const [, setOrderTotal] = useState(0)

   useEffect(() => {
      const fetchItems = async () => {
         const items = await listItems()
         setMenuItems(items)
      }
      fetchItems()
   }, [])

   const addItem = item => {
      console.log('------------------')
      orderContext.addItem(item)
      console.log('------------------')
   }

   const removeItem = item => {
      console.log('------------------')
      orderContext.removeItem(item)
      console.log('------------------')
   }

   // const setItemQuantity = (item, quantity) => {
   //    console.log('-----------------------------')
   //    orderContext.setItemQuantity(item, quantity)
   //    console.log('-----------------------------')
   // }

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
                           onAdd={addItem}
                           onRemove={removeItem}
                        />
                     )
                  })}
         </Box>
      </Box>
   )
}
