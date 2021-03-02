import { useState } from "react"
import {
   Box,
   Heading,
   Container,
   Flex,
   Text,
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
   Image,
   useColorMode,
} from "@chakra-ui/react"
import { HeartOutline, Heart, ExternalLinkOutline } from "heroicons-react"
import Genres from "../shared/Genres"
import imgUrl from "../../utils/imgUrl"
import timeConvert from "../../utils/timeConvert"
import Rating from "react-rating"
import { Star, StarOutline, EyeOutline, ClockOutline } from "heroicons-react"

export default function Details({ movie }) {
   const [liked, setLiked] = useState(false)

   const { colorMode } = useColorMode()
   const colorT = colorMode === "dark" ? "#fff" : "#000 "

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
               <Tag
                  borderColor={colorT}
                  color={colorT}
                  minH="2rem"
                  px="1rem"
                  cursor="pointer"
                  variant="outline"
                  onClick={handleLike}
               >
                  {liked ? <Heart color="red" /> : <HeartOutline />}
                  <TagLabel letterSpacing="2px" ml="2" d={["none", "block"]}>
                     Like
                  </TagLabel>
               </Tag>

               <a href={movie.homepage} target="_blank">
                  <Tag borderColor={colorT} color={colorT} minH="2rem" px="1rem" variant="outline">
                     <ExternalLinkOutline />
                     <TagLabel letterSpacing="2px" ml="2" d={["none", "block"]}>
                        More
                     </TagLabel>
                  </Tag>
               </a>
            </HStack>
         </Flex>

         <Divider my="1rem" />

         <Box borderRadius="lg" py="4">
            <Grid templateColumns={["1fr", "repeat(12, 1fr)"]} gap={2}>
               <GridItem colSpan={[8, 4]}>
                  <Image src={imgUrl(movie.poster_path, "original")} borderRadius="lg" />

                  <Button w="100%" borderRadius="lg" textTransform="capitalize" mt="2">
                     Welcome
                  </Button>
                  <Button w="100%" variant="outline" borderRadius="lg" textTransform="capitalize" mt="2">
                     visit
                  </Button>
               </GridItem>

               <GridItem colSpan={8} padding={[".5rem", "1rem"]} borderRadius="lg">
                  <Heading lineHeight="3rem" as="h2" fontSize={["1.2rem", "1.6rem"]}>
                     {movie.title}
                  </Heading>

                  <Heading as="h3" fontWeight="medium" fontSize={[".9rem", "1rem"]} letterSpacing="1.3px">
                     {movie.tagline}
                  </Heading>

                  <Divider my="1rem" />

                  <HStack
                     lineHeight="0"
                     spacing={{ base: "none", md: "auto" }}
                     flexDirection={{ base: "column", md: "row" }}
                     align={{ base: "baseline", md: "center" }}
                  >
                     <HStack my="1">
                        <EyeOutline />
                        <Text as="span">{movie.popularity}</Text>
                     </HStack>

                     <HStack my="1">
                        <ClockOutline />
                        <Text as="span">{timeConvert(movie.runtime)}</Text>
                     </HStack>

                     <HStack my="1">
                        <Rating
                           initialRating={movie.vote_average}
                           stop={10}
                           step={2}
                           emptySymbol={<StarOutline />}
                           fullSymbol={<Star />}
                           readonly
                        />
                        <Text as="span">({movie.vote_average}/10)</Text>
                     </HStack>
                  </HStack>

                  <Divider my=".8rem" />

                  <Box>
                     <Heading lineHeight="3rem" as="h2" fontSize={["1.2rem", "1.6rem"]}>
                        Details
                     </Heading>

                     <Text fontSize=".85rem" textTransform="capitalize" letterSpacing="1.3px">
                        <Text as="strong">Languages:</Text>
                        {movie.spoken_languages.map((lan) => (
                           <Text key={lan.name} as="span">
                              {" "}
                              {lan.english_name}
                           </Text>
                        ))}
                     </Text>

                     <Text fontSize=".85rem" mt=".5rem" textTransform="capitalize" letterSpacing="1.3px">
                        <Text as="strong">Release:</Text>

                        <Text as="span"> {movie.release_date}</Text>
                     </Text>

                     <HStack spacing={2} mt=".7rem">
                        {movie.genres.map((gen) => (
                           <Tag size="sm" px="10px" key={gen.id} color={colorT} variant="outline" borderRadius="xl">
                              {gen.name}
                           </Tag>
                        ))}
                     </HStack>

                     <Heading as="h3" fontSize={["1rem", "1.2rem"]} mt="1rem" letterSpacing="1.3px">
                        Storyline
                     </Heading>

                     <Text mt=".7rem">{movie.overview}</Text>
                  </Box>
               </GridItem>
            </Grid>
         </Box>
      </Container>
   )
}
