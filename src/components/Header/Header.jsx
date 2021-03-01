import NextLink from "next/link"
import {
   Flex,
   Spacer,
   Box,
   Container,
   InputGroup,
   Input,
   InputRightElement,
   IconButton,
   Image,
   useColorMode,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import Nav from "./Nav"
import site from "../../config/site"

export default function Header() {
   const { colorMode } = useColorMode()

   return (
      <Box w="100%" py={{ base: "3", md: "4" }} boxShadow="sm">
         <Container maxWidth="container.lg">
            <Flex align="center">
               <NextLink href="/">
                  <a>
                     <Image src={colorMode === "dark" ? site.logo.light : site.logo.dark} h="30px" />
                  </a>
               </NextLink>

               <InputGroup size="md" mx="4" maxW="2xs" display={{ base: "none", md: "flex" }}>
                  <Input placeholder="Search" borderRadius="20px" _focus={{ borderColor: "primary.400" }} />
                  <InputRightElement>
                     <IconButton
                        minW="3rem"
                        size="md"
                        icon={<SearchIcon />}
                        aria-label="Search"
                        borderRadius="0 20px 20px 0"
                     />
                  </InputRightElement>
               </InputGroup>

               <Spacer />

               <Nav />
            </Flex>
         </Container>
      </Box>
   )
}
