import { useState } from "react"
import { Button, useToast, Alert, Image } from "@chakra-ui/react"
import { HeartOutline, Heart, ExternalLinkOutline } from "heroicons-react"
import Link from "next/link"
import imgUrl from "../../utils/imgUrl"

export default function DetialsLeftPart({ movie }) {
   const [liked, setLiked] = useState(false)

   const toast = useToast()

   const handleLike = () => {
      toast({
         position: "bottom-left",
         duration: 4000,
         render: () => (
            <Alert colorScheme="primary" variant="left-accent" fontSize=".9rem">
               {liked ? "  Removed From Liked Movies." : "  Added To Liked Movies."}
            </Alert>
         ),
      })

      setLiked(!liked)
   }

   return (
      <>
         <Image src={imgUrl(movie.poster_path, "original")} borderRadius="lg" />

         <Link href="/watch/movies">
            <a>
               <Button w="100%" borderRadius="lg" textTransform="capitalize" mt="2">
                  Watch
               </Button>
            </a>
         </Link>
         <Button
            borderColor={liked ? "red" : "primary.400"}
            color={liked ? "red" : "primary.400"}
            leftIcon={liked ? <Heart color="red" /> : <HeartOutline />}
            onClick={handleLike}
            w="100%"
            variant="outline"
            borderRadius="lg"
            textTransform="capitalize"
            mt="2"
         >
            {liked ? "Liked" : "Like"}
         </Button>

         <a href={movie.homepage} target="_blank">
            <Button
               variant="ghost"
               leftIcon={<ExternalLinkOutline />}
               w="100%"
               borderRadius="lg"
               textTransform="capitalize"
               mt="2"
            >
               More
            </Button>
         </a>
      </>
   )
}
