import { useState } from "react"
import {
   Box,
   Heading,
   Container,
   Flex,
   Spacer,
   Button,
   Divider,
   Tag,
   HStack,
   useToast,
   TagLabel,
   Alert,
} from "@chakra-ui/react"
import { HeartOutline, Heart, CheckCircleOutline } from "heroicons-react"
import moduleName from "@chakra-ui/icons"
import Genres from "../shared/Genres"

export default function Details({ movie }) {
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
      <Container maxW="container.md">
         <Flex>
            <Heading as="h1" fontSize="2rem">
               {movie.title}
            </Heading>
            <Spacer />

            <HStack spacing={3}>
               <Tag letterSpacing="2px" minH="2rem" px="1rem" variant="outline" onClick={handleLike}>
                  {liked ? <Heart color="red" /> : <HeartOutline />}
                  <TagLabel ml="2">Like</TagLabel>
               </Tag>

               <a href={movie.homepage} target="_blank">
                  <Tag letterSpacing="2px" minH="2rem" px="1rem" variant="outline">
                     More
                  </Tag>
               </a>
            </HStack>
         </Flex>

         <Divider my="1rem" />
      </Container>
   )
}
