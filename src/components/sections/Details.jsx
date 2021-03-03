import { Box, Heading, Container, Flex, Spacer, Divider, Grid, GridItem } from "@chakra-ui/react"

import DetialsRightPart from "../parts/DetialsRightPart"
import DetialsLeftPart from "../parts/DetialsLeftPart"
import Similar from "../shared/Similar"

export default function Details({ movie }) {
   return (
      <Container maxW="container.md">
         <Flex direction={{ base: "column", sm: "row" }}>
            <Heading as="h1" fontSize={["1.5rem", "2rem"]}>
               {movie.title}
            </Heading>
            <Spacer />
         </Flex>

         <Divider my="1rem" />

         <Box borderRadius="lg" py="4">
            <Grid templateColumns={["1fr", "repeat(12, 1fr)"]} gap={2}>
               <GridItem colSpan={[8, 4]}>
                  <DetialsLeftPart movie={movie} />
               </GridItem>

               <GridItem colSpan={8} padding={[".5rem", "1rem"]} borderRadius="lg">
                  <DetialsRightPart movie={movie} />
               </GridItem>
            </Grid>

            <Divider my="1rem" />

            <Similar id={movie.id} />
         </Box>
      </Container>
   )
}
