import NextLink from "next/link"
import { Flex, Spacer, Box, Heading, Container } from "@chakra-ui/react"
import Nav from "./Nav"

export default function Header() {
   return (
      <Box w="100%" py={{ base: "3", md: "4" }} boxShadow="md">
         <Container maxWidth="container.lg">
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
      </Box>
   )
}
