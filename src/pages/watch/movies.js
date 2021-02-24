import React from "react"
import { Heading } from "@chakra-ui/react"
import MoviesLayout from "../../layouts/MoviesLayout"

export default function Movies() {
   return (
      <>
         <Heading as="h2">All Movies</Heading>
      </>
   )
}

Movies.title = "All Movies"
Movies.Layout = MoviesLayout
