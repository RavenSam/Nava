import { Box, Container, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios"
import HeroCarousel from "../components/sections/HeroCarousel"
import SliderPosts from "../components/posts/SliderPosts"
import GridPosts from "../components/posts/GridPosts"
import { LoadingPage } from "../components/shared/Loading"

export default function Home({ movies }) {
   const [load, setLoad] = useState(true)

   useEffect(() => setLoad(false), [])
   if (load) return <LoadingPage />

   return (
      <>
         <HeroCarousel posts={movies.slice(0, 5)} />

         <Box py="5rem">
            <SliderPosts posts={movies.slice(0, 5)} />
         </Box>

         <Container maxW="100%" py="3rem">
            <Heading p={[".5rem", "1rem"]} mb="2">
               Awaited
            </Heading>
            <GridPosts posts={movies.slice(5, 13)} />
         </Container>
      </>
   )
}

Home.title = "Home Page"

export const getStaticProps = async ({ params }) => {
   try {
      const key = process.env.NEXT_PUBLIC_TMDB_API_KEY
      const req = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`

      const { data } = await axios(req)

      return {
         props: { movies: data.results },
      }
   } catch (err) {
      console.log(err.message)

      if (err.response && err.response.status === 404) {
         return {
            notFound: true,
         }
      }
   }
}
