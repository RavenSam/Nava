import Header from "../components/Header/Header"
import { Box, Grid, GridItem } from "@chakra-ui/react"
import Menu from "../components/Menu"

export default function MoviesLayout({ children }) {
   return (
      <Box>
         <Header />

         <Grid mt="5" templateColumns="repeat(12, 1fr)" gap={2}>
            <GridItem colSpan={3}>
               <Menu />
            </GridItem>

            <GridItem colSpan={9}>{children}</GridItem>
         </Grid>
      </Box>
   )
}
