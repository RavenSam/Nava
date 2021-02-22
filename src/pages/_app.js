import { ChakraProvider } from "@chakra-ui/react"

import DefaultLayout from "../layouts/DefaultLayout"
import { theme } from "../theme"
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
   const Layout = Component.Layout ? Component.Layout : DefaultLayout

   return (
      <ChakraProvider theme={theme}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </ChakraProvider>
   )
}
