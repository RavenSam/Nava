import React from "react"
import { Heading } from "@chakra-ui/react"
import MoviesLayout from "../../layouts/MoviesLayout"

export default function Series() {
   return (
      <>
         <Heading as="h2">Series</Heading>
      </>
   )
}

Series.title = "Series"
Series.Layout = MoviesLayout
