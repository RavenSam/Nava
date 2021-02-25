import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head"
import DefaultLayout from "../layouts/DefaultLayout"
import { theme } from "../theme"
import NextNprogress from "nextjs-progressbar"
import NProgress from "nprogress"
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
   const Layout = Component.Layout ? Component.Layout : DefaultLayout
   const title = Component.title ? Component.title : "Nava WebSite"

   NProgress.configure({ showSpinner: false })

   return (
      <>
         <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />

            <title>{title}</title>
         </Head>

         <ChakraProvider theme={theme}>
            <NextNprogress color={theme.colors.primary[300]} height="3" startPosition={0.3} stopDelayMs={200} />

            <Layout>
               <Component {...pageProps} />
            </Layout>
         </ChakraProvider>
      </>
   )
}
