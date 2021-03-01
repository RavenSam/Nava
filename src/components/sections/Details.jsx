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
   SimpleGrid,
   Grid,
   GridItem,
} from "@chakra-ui/react"
import { HeartOutline, Heart, ExternalLinkOutline } from "heroicons-react"
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
         <Flex direction={{ base: "column", sm: "row" }}>
            <Heading as="h1" fontSize={["1.5rem", "2rem"]}>
               {movie.title}
            </Heading>
            <Spacer />

            <HStack spacing={["auto", 2]} mt="2">
               <Tag minH="2rem" px="1rem" cursor="pointer" variant="outline" onClick={handleLike}>
                  {liked ? <Heart color="red" /> : <HeartOutline />}
                  <TagLabel letterSpacing="2px" ml="2" d={["none", "block"]}>
                     Like
                  </TagLabel>
               </Tag>

               <a href={movie.homepage} target="_blank">
                  <Tag minH="2rem" px="1rem" variant="outline">
                     <ExternalLinkOutline />
                     <TagLabel letterSpacing="2px" ml="2" d={["none", "block"]}>
                        More
                     </TagLabel>
                  </Tag>
               </a>
            </HStack>
         </Flex>

         <Divider my="1rem" />

         <Box boxShadow="md" borderRadius="lg">
            <Grid templateColumns={["1fr", null, "repeat(12, 1fr)"]} gap={2}>
               <GridItem colSpan={[8, null, 4]} bg="blue.600" height="100px"></GridItem>
               <GridItem colSpan={8} bg="pink.600" height="100px"></GridItem>
            </Grid>
         </Box>
      </Container>
   )
}
