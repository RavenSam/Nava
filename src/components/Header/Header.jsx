import {
   Flex,
   Spacer,
   Box,
   Heading,
   Container,
   InputGroup,
   Input,
   Button,
   InputRightElement,
   IconButton,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
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

               <InputGroup size="md" mx="4" maxW="2xs" display={{ base: "none", md: "flex" }}>
                  <Input placeholder="Search" borderRadius="20px" _focus={{ borderColor: "primary.400" }} />
                  <InputRightElement>
                     <IconButton size="md" icon={<SearchIcon />} borderRadius="0 20px 20px 0" />
                  </InputRightElement>
               </InputGroup>

               <Spacer />

               <Nav />
            </Flex>
         </Container>
      </Box>
   )
}
