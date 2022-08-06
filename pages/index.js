import { Box, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import MenuItem from '../components/menu/MenuItem'
import Search from '../components/util/Search'

export default function Home() {
   const [searchQuery, setSearchQuery] = useState('')
   const [menuItems, setMenuItems] = useState([])

   useEffect(() => {
      setMenuItems([
         {
            name: 'Hamburger simples',
            image: 'https://img.freepik.com/fotos-gratis/hamburguer-de-carne-com-salada-de-queijo-e-tomate-em-piso-escuro_140725-89524.jpg?w=2000',
            price: 16.0,
            description:
               'Burger Angus (160g), queijo prato, molho Fanis, maiosese e pão brioche'
         },
         {
            name: 'Pizza',
            image: 'https://diaadianoticia.com.br/wp-content/uploads/2022/07/pizza-site-or.jpg',
            price: 20.0,
            description: 'Peperonni, pimentão, queijo e molho de tomate'
         },
         {
            name: 'Pastel',
            image: 'https://www.comidaereceitas.com.br/wp-content/uploads/2007/11/Pastel_feiraaoo.jpg',
            price: 5.0,
            description: 'Carne, queijo, frango c/ catupiry'
         }
      ])
   }, [])

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
            {menuItems
               .filter(item => item.name.toLowerCase().startsWith(searchQuery))
               .map((item, key) => {
                  return (
                     <MenuItem
                        key={key}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        description={item.description}
                     />
                  )
               })}
         </Box>
      </Box>
   )
}
