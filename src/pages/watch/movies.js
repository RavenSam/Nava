import { useEffect, useState } from "react"
import { Heading, SimpleGrid, Box, Image } from "@chakra-ui/react"
import MoviesLayout from "../../layouts/MoviesLayout"
import axios from "axios"
import Loading from "../../components/shared/Loading"

// Dummy data
import { results as movies } from "../../../movie.json"

export default function Movies({ sortBy, load, setLoad }) {
   // const [movies, setMovies] = useState([])

   // useEffect(async () => {
   //    try {
   //       const key = process.env.NEXT_PUBLIC_TMDB_API_KEY
   //       const req = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&year=2020&language=en-US&sort_by=${sortBy}&page=1`

   //       setLoad(true)
   //       const { data } = await axios(req)

   //       setMovies(data.results)
   //       setLoad(false)
   //    } catch (err) {
   //       setLoad(false)
   //       console.log(err)
   //    }
   // }, [sortBy])

   if (load) return <Loading />

   return (
      <>
         <SimpleGrid columns={[2, null, 3]} spacing={[".5rem", "1rem"]}>
            {movies.map((movie) => (
               <Box rounded="lg" overflow="hidden" key={movie.id} bg="tomato" minHeight="200px">
                  <Image minWidth="100%" minHeight="100%" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
               </Box>
            ))}
         </SimpleGrid>
      </>
   )
}

Movies.title = "All Movies"
Movies.Layout = MoviesLayout
