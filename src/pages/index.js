import { Box } from "@chakra-ui/react"

import HeroCarousel from "../components/sections/HeroCarousel"
import SliderPosts from "../components/posts/SliderPosts"

// Dummy data
import { results } from "../../movie.json"

export default function Home() {
   return (
      <>
         <HeroCarousel posts={results.slice(0, 5)} />

         <Box py="5rem">
            <SliderPosts posts={results.slice(0, 5)} />
         </Box>
      </>
   )
}

Home.title = "Home Page"
