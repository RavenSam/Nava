import NextLink from "next/link"
import { Flex, Spacer, Box, Heading, Container, Center, Text } from "@chakra-ui/react"
import Nav from "./Nav"

export default function Header() {
   return (
      <header>
         <Container py="4" maxWidth="container.lg">
            <Flex>
               <Box className="logo">
                  <Heading size="lg" letterSpacing="wide">
                     NAVA
                  </Heading>
               </Box>

               <Spacer />

               <Nav />
            </Flex>
         </Container>
      </header>
   )
}
