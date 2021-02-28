import { Flex, Spacer, Box, Text, Heading, HStack, Button, Container } from "@chakra-ui/react"
import { Star, StarOutline, PlayOutline } from "heroicons-react"
import Genres from "../shared/Genres"
import Rating from "react-rating"

import Slider from "../shared/Slider"
import imgUrl from "../../utils/imgUrl"

export default function HeroCarousel({ posts = [] }) {
   console.log(posts[0])

   return (
      <Box {...heroProps().container}>
         <Slider sliderProps={sliderProps()}>
            {posts.map((post) => (
               <Box key={post.id} bg={`url(${imgUrl(post.backdrop_path, "original")})`} {...heroProps().item}>
                  <Container {...heroProps().content}>
                     <Genres genreIds={post.genre_ids} />

                     <Heading as="h2" fontSize={["25px", "40px", null, "60px"]}>
                        {post.title}
                     </Heading>

                     <HStack color="orange.400" py={[".8rem"]}>
                        <Rating
                           initialRating={post.vote_average}
                           stop={10}
                           step={2}
                           emptySymbol={<StarOutline />}
                           fullSymbol={<Star />}
                           readonly
                        />
                        <Text as="span" color="#fff">
                           {post.vote_average}/10
                        </Text>
                     </HStack>

                     <Button my="1" fontSize={["12px", "16px"]} leftIcon={<PlayOutline />}>
                        Watch
                     </Button>
                  </Container>
               </Box>
            ))}
         </Slider>
      </Box>
   )
}

const sliderProps = () => {
   return {
      animationType: "fadeout",
      animationDuration: 2000,
      disableButtonsControls: true,
      disableDotsControls: true,
      infinite: true,
      mouseTracking: true,
      autoPlay: true,
      autoPlayInterval: 8000,
   }
}

// Chakra props style
const heroProps = () => {
   const container = {}

   const item = {
      h: ["45vh", "60vh", "88vh"],
      w: "100%",
      color: "white",
      className: "item",
      p: "4",
      bgSize: "cover",
      bgPosition: "center",
      bgRepeat: "no-repeat",
      pos: "relative",
      d: "flex",
      alignItems: "center",
      justifyContent: ["center", "start"],

      _before: {
         content: '""',
         pos: "absolute",
         top: 0,
         left: 0,
         bg: "rgba(0,0,0,.6)",
         width: "100%",
         height: "100%",
      },
   }

   const content = {
      zIndex: 2,
      pos: "relative",
      maxW: "container.lg",
      p: 0,
   }

   return { container, item, content }
}
