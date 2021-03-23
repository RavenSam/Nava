import { useEffect, useState } from "react"
import MoviesLayout from "../../layouts/MoviesLayout"
import axios from "axios"
import Loading from "../../components/shared/Loading"

// Dummy data
// import { results as movies } from "../../../movie.json"
// Components
import GridPosts from "../../components/posts/GridPosts"
import ListPosts from "../../components/posts/ListPosts"

export default function Series({ sortBy, load, setLoad, viewGrid }) {
   const [movies, setMovies] = useState([])

   useEffect(async () => {
      try {
         const key = process.env.NEXT_PUBLIC_TMDB_API_KEY
         const req = `https://api.themoviedb.org/3/tv/${sortBy}?api_key=${key}&language=en-US&page=1`

         setLoad(true)
         const { data } = await axios(req)

         setMovies(data.results)
         setLoad(false)
      } catch (err) {
         setLoad(false)
         console.log(err)
      }
   }, [sortBy])

   if (load) return <Loading />

   return <>{viewGrid ? <GridPosts posts={movies} /> : <ListPosts posts={movies} />}</>
}

Series.title = "Series"
Series.Layout = MoviesLayout
