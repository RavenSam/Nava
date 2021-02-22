import NextLink from "next/link"
import { Flex, Spacer, Box, Heading, Container, Center, Text } from "@chakra-ui/react"
import ModeSwitch from "../shared/ModeSwitch"

const linkPages = [
   { name: "Home", href: "#" },
   { name: "About", href: "#" },
]

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

               <Flex>
                  <Center>
                     {linkPages.map((page) => (
                        <Text key={page.name} as="a" mx="3">
                           <NextLink href={page.href}>
                              <a>{page.name}</a>
                           </NextLink>
                        </Text>
                     ))}

                     <ModeSwitch />
                  </Center>
               </Flex>
            </Flex>
         </Container>
      </header>
   )
}
