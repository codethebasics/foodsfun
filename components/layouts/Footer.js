import Link from 'next/link'
import styles from '../../styles/layouts/Footer.module.scss'

import { useAppContext } from '/src/context/state'
import { Box, Flex, Button } from '@chakra-ui/react'
import { TbBellRinging2 } from 'react-icons/tb'
import { BiFoodMenu } from 'react-icons/bi'
import { GrUnorderedList } from 'react-icons/gr'
import { RiFilePaperLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'
import { ImCheckmark } from 'react-icons/im'

export default function Footer({ subtotal }) {
   const appContext = useAppContext()

   return (
      <Box className={styles.footer} display="flex" flexDirection="column">
         <Flex className={styles.subtotal} justifyContent="space-between">
            <Box>
               <Button
                  size="sm"
                  colorScheme="green"
                  borderRadius="4px"
                  rightIcon={<ImCheckmark />}
               >
                  Confirmar
               </Button>
            </Box>
            <Box>R$ {appContext.total.toFixed(2)}</Box>
         </Flex>
         <Flex
            padding="10px"
            justifyContent="space-between"
            width="100%"
            className={styles.navlinks}
         >
            <Box
               display="flex"
               flexDirection="column"
               alignItems="center"
               padding="5px"
            >
               <Link href="/">
                  <a>
                     <BiFoodMenu />
                  </a>
               </Link>
            </Box>
            <Box
               display="flex"
               flexDirection="column"
               alignItems="center"
               padding="5px"
            >
               <Link href="/call">
                  <a>
                     <TbBellRinging2 />
                  </a>
               </Link>
            </Box>
            <Box
               display="flex"
               flexDirection="column"
               alignItems="center"
               padding="5px"
            >
               <Link href="/pedidos">
                  <a>
                     <GrUnorderedList />
                  </a>
               </Link>
            </Box>
            <Box
               display="flex"
               flexDirection="column"
               alignItems="center"
               padding="5px"
            >
               <Link href="/comanda">
                  <a>
                     <RiFilePaperLine />
                  </a>
               </Link>
            </Box>
            <Box
               display="flex"
               flexDirection="column"
               alignItems="center"
               padding="5px"
            >
               <Link href="/perfil">
                  <a>
                     <AiOutlineUser />
                  </a>
               </Link>
            </Box>
         </Flex>
      </Box>
   )
}
