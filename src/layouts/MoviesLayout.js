import Header from "../components/Header/Header"
import { Box, Grid, GridItem } from "@chakra-ui/react"
import Menu from "../components/Menu"
import Filter from "../components/Filter"

export default function MoviesLayout({ children }) {
   return (
      <Box>
         <Header />

         <Filter />

         <Grid templateColumns="repeat(16, 1fr)" gap={3}>
            <GridItem colSpan={3} d={{ base: "none", md: "block" }}>
               <Menu />
            </GridItem>

            <GridItem colSpan={{ base: "16", md: "13" }}>{children}</GridItem>
         </Grid>
      </Box>
   )
}
