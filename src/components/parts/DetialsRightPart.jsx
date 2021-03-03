import { Box, Heading, Text, Divider, Tag, HStack } from "@chakra-ui/react"

import timeConvert from "../../utils/timeConvert"
import Rating from "react-rating"
import { Star, StarOutline, EyeOutline, ClockOutline } from "heroicons-react"

export default function DetialsRightPart({ movie }) {
   return (
      <>
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
                  <Tag size="sm" px="10px" key={gen.id} variant="outline" borderRadius="xl">
                     {gen.name}
                  </Tag>
               ))}
            </HStack>

            <Heading as="h3" fontSize={["1rem", "1.2rem"]} mt="1rem" letterSpacing="1.3px">
               Storyline
            </Heading>

            <Text mt=".7rem">{movie.overview}</Text>
         </Box>
      </>
   )
}
