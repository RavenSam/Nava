import { useEffect, useState } from "react"
import { Heading, SimpleGrid, Box, Image } from "@chakra-ui/react"
import MoviesLayout from "../../layouts/MoviesLayout"
import axios from "axios"
import Loading from "../../components/shared/Loading"

// Dummy data
import { results as movies } from "../../../movie.json"
import GridPosts from "../../components/shared/GridPosts"
import ListPosts from "../../components/shared/ListPosts"

export default function Movies({ sortBy, load, setLoad, viewGrid }) {
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

   return <>{viewGrid ? <GridPosts posts={movies} /> : <ListPosts posts={movies} />}</>
}

Movies.title = "All Movies"
Movies.Layout = MoviesLayout
