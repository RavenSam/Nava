import { Flex, Spacer, Box, Text, Heading } from "@chakra-ui/react"

import Slider from "../shared/Slider"
import imgUrl from "../../utils/imgUrl"

export default function HeroCarousel({ posts = [] }) {
   return (
      <Box {...heroProps().container}>
         <Slider sliderProps={sliderProps()}>
            {posts.map((post) => (
               <Box key={post.id} bg={`url(${imgUrl(post.backdrop_path, "original")})`} {...heroProps().item}>
                  <Box {...heroProps().content}>
                     <Heading as="h2">Welcome</Heading>
                  </Box>
               </Box>
            ))}
         </Slider>
      </Box>
   )
}

const sliderProps = () => {
   return {
      animationType: "fadeout",
      animationDuration: 1000,
      disableButtonsControls: true,
      infinite: true,
      mouseTracking: true,
   }
}

// Chakra props style
const heroProps = () => {
   const container = {}

   const item = {
      h: ["85vh"],
      w: "100%",
      color: "white",
      className: "item",
      p: "4",
      bgSize: "cover",
      bgPosition: "center",
      bgRepeat: "no-repeat",
      pos: "relative",

      _before: {
         content: '""',
         pos: "absolute",
         top: 0,
         left: 0,
         bg: "rgba(0,0,0,.5)",
         width: "100%",
         height: "100%",
      },
   }

   const content = {
      zIndex: 2,
      pos: "relative",
   }

   return { container, item, content }
}
