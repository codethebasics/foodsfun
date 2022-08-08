import '../styles/globals.scss'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { OrderWrapper } from '../src/context/order.context'

function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider>
         <OrderWrapper>
            <Box className="mainWrapper">
               <Box className="header">
                  <Header />
               </Box>
               <Box className="main">
                  <Component {...pageProps} />
               </Box>
               <Box className="footer">
                  <Footer subtotal={77.77} />
               </Box>
            </Box>
         </OrderWrapper>
      </ChakraProvider>
   )
}

export default MyApp
