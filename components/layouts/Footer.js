import styles from '../../styles/layouts/Footer.module.scss'

import { Box } from '@chakra-ui/react'

export default function Footer() {
   return (
      <Box p={5} className={styles.footer}>
         <span>Footer</span>
      </Box>
   )
}
