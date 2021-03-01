import axios from "axios"
import { Box } from "@chakra-ui/react"
import imgUrl from "../../../utils/imgUrl"
import { LoadingPage } from "../../../components/shared/Loading"
import Banner from "../../../components/sections/Banner"
import Details from "../../../components/sections/Details"

export default function MovieDetail({ movie }) {
   if (!movie) return <LoadingPage />

   console.log(movie)
   return (
      <>
         <Banner image={imgUrl(movie.backdrop_path, "original")} alt={movie.name} />

         <Box mt="-10vh" zIndex="2" pos="relative">
            <Details movie={movie} />
         </Box>
      </>
   )
}

export const getStaticProps = async ({ params }) => {
   try {
      const key = process.env.NEXT_PUBLIC_TMDB_API_KEY
      const req = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${key}&language=en-US`

      const { data } = await axios(req)

      return {
         props: { movie: data },
      }
   } catch (err) {
      console.log(err.message)
      return {
         notFound: true,
      }
   }
}

export const getStaticPaths = async () => {
   return {
      paths: [],
      fallback: true,
   }
}
