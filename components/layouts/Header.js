import styles from '../../styles/layouts/Header.module.scss'

import { Box, Image } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'

export default function Header() {
   const openOverlayMenu = () => {
      console.log('open overlay menu')
   }

   return (
      <Box
         p={5}
         className={styles.header}
         display="flex"
         justifyContent="space-between"
         borderBottom="2px solid #fe8100"
      >
         <Box>
            <Image
               src="/img/logo.png"
               alt="FoodsFun"
               objectFit="cover"
               width={75}
            />
         </Box>
         <Box>
            <SettingsIcon
               color="#ddd"
               fontSize="1.3rem"
               cursor="pointer"
               onClick={openOverlayMenu}
            />
         </Box>
      </Box>
   )
}
