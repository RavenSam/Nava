import { useEffect, useState } from "react"
import axios from "axios"
import { HStack, Tag } from "@chakra-ui/react"

export default function Genres({ genreIds = [], color = "#fff" }) {
   const [genres, setGenres] = useState([])

   useEffect(async () => {
      if (!genres.length) {
         try {
            const key = process.env.NEXT_PUBLIC_TMDB_API_KEY
            const req = `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`

            const { data } = await axios(req)
            setGenres(data.genres)
         } catch (err) {
            console.log(err)
         }
      }
   }, [])

   return (
      <HStack spacing={2}>
         {genreIds.map((id) => (
            <Tag size="sm" px="10px" key={id} color={color} variant="outline" borderRadius="xl">
               {genres.find((x) => x.id === id) && genres.find((x) => x.id === id).name}
            </Tag>
         ))}
      </HStack>
   )
}
