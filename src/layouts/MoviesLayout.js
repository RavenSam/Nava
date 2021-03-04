import React, { useState } from "react"

import Header from "../components/Header/Header"
import { Box, Grid, GridItem } from "@chakra-ui/react"
import Menu from "../components/Menu"
import Filter from "../components/Filter"
import Footer from "../components/Footer/Footer"

export default function MoviesLayout({ children }) {
   const [sortBy, setSortBy] = useState("release_date.desc")
   const [load, setLoad] = useState(false)
   const [viewGrid, setViewGrid] = useState(true)

   const customProps = { sortBy, setSortBy, load, setLoad, viewGrid }

   return (
      <>
         <Header />

         <Filter sortBy={sortBy} setSortBy={setSortBy} viewGrid={viewGrid} setViewGrid={setViewGrid} />

         <Grid templateColumns="repeat(12, 1fr)" gap={3}>
            <GridItem colSpan={3} d={{ base: "none", md: "block" }} p="1rem">
               <Menu />
            </GridItem>

            <GridItem colSpan={{ base: "12", md: "9" }} p="1rem">
               {React.cloneElement(children, customProps)}
            </GridItem>
         </Grid>

         <Footer />
      </>
   )
}
