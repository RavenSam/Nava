import { Stack, Box, Container, Text } from "@chakra-ui/react"

import FooterListsStack from "./FooterListsStack"

export default function Footer() {
   return (
      <Box as="footer" bg="blackAlpha.900" color="white" py="1rem">
         <Container maxW="container.lg">
            <Stack
               py="5rem"
               spacing="auto"
               direction={{ base: "column", sm: "row" }}
               textAlign={{ base: "center", sm: "start" }}
            >
               <FooterListsStack />
            </Stack>

            <Text color="grey" textAlign="center">
               &copy; 2021 Nava &bull; All Rights Reserved.
            </Text>
         </Container>
      </Box>
   )
}
