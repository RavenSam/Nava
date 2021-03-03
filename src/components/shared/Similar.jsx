import { LoadingPage } from "./Loading"
import { Heading } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import GridPosts from "../posts/GridPosts"
import axios from "axios"

// Dummy Data
import movies from "../../../movie.json"

export default function Similar({ id }) {
   const [similar, setSimilar] = useState([])
   const [load, setLoad] = useState(false)

   useEffect(async () => {
      try {
         const key = process.env.NEXT_PUBLIC_TMDB_API_KEY
         const req = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US&page=1`

         setLoad(true)
         const { data } = await axios(req)

         setSimilar(data.results)
         setLoad(false)
      } catch (err) {
         setLoad(false)
         console.log(err)
      }
   }, [])

   if (load) return <LoadingPage />

   return (
      similar.length > 0 && (
         <>
            <Heading lineHeight="3rem" my="1rem" as="h2" fontSize={["1.2rem", "1.6rem"]}>
               Similar
            </Heading>

            <GridPosts posts={similar.slice(0, 8)} />
         </>
      )
   )
}
