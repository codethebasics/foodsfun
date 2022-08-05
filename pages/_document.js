import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
   const theme = 'themeDark'

   return (
      <Html>
         <Head />
         <body className={theme}>
            <Main />
            <NextScript />
         </body>
      </Html>
   )
}
