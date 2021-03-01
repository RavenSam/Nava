import { Box } from "@chakra-ui/react"

import HeroCarousel from "../components/sections/HeroCarousel"
import SliderPosts from "../components/posts/SliderPosts"

// Dummy data
import { results as movies } from "../../movie.json"

export default function Home() {
   console.log(movies[0])
   return (
      <>
         <HeroCarousel posts={movies.slice(0, 5)} />

         <Box py="5rem">
            <SliderPosts posts={movies.slice(0, 5)} />
         </Box>
      </>
   )
}

Home.title = "Home Page"
