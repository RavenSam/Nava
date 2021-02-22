import { Container, Heading, Stack, Button, Flex } from "@chakra-ui/react"
import Head from "next/head"

export default function Home() {
   return (
      <>
         <Head>
            <title>Home Page</title>
         </Head>

         <Container maxWidth="container.md">
            <Stack height="80vh" justifyContent="center">
               <Heading
                  fontSize={{ base: "30px", md: "45px", lg: "55px" }}
                  textAlign="center"
                  py="5"
                  letterSpacing="wider"
               >
                  Welcome NextJs & Chakra UI
               </Heading>

               <Flex alignItems="center" py="5" justifyContent="center">
                  <Button mr="2">Solid</Button>

                  <Button variant="outline">Outline</Button>
               </Flex>
            </Stack>
         </Container>
      </>
   )
}
