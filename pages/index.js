import { Box, Image, Text } from '@chakra-ui/react'
import MenuItem from '../components/menu/MenuItem'

export default function Home() {
   return (
      <Box>
         <Box>
            <Image
               src="https://img.freepik.com/premium-vector/restaurant-mural-wallpaper_23-2148685950.jpg?w=1480"
               width="100%"
               borderBottom="2px solid #fe8100"
            />
         </Box>
         <Box>
            <MenuItem
               name="Hamburger simples"
               image="https://img.freepik.com/fotos-gratis/hamburguer-de-carne-com-salada-de-queijo-e-tomate-em-piso-escuro_140725-89524.jpg?w=2000"
               price="R$16,00"
               description="Burger Angus (160g), queijo prato, molho Fanis, maiosese e pão brioche"
            />
            <MenuItem
               name="Pizza"
               image="https://diaadianoticia.com.br/wp-content/uploads/2022/07/pizza-site-or.jpg"
               price="R$20,00"
               description="Peperonni, pimentão, queijo e molho de tomate"
            />
            <MenuItem
               name="Pastel"
               image="https://www.comidaereceitas.com.br/wp-content/uploads/2007/11/Pastel_feiraaoo.jpg"
               price="R$5,00"
               description="Carne, queijo, frango c/ catupiry"
            />
         </Box>
      </Box>
   )
}
