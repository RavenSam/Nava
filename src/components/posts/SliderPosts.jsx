import { Heading, Text, Box, Image, Flex } from "@chakra-ui/react"
import Link from "next/link"
import imgUrls from "../../utils/imgUrl"
import { ViewIcon, TimeIcon } from "@chakra-ui/icons"

import Slider from "../shared/Slider"

export default function SliderPosts({ posts = [] }) {
   return (
      <Box id="sliderPosts">
         <Heading p={[".5rem", "1rem"]} mb="2">
            Popular
         </Heading>

         <Slider sliderProps={sliderProps}>
            {posts.map((post) => (
               <Link key={post.id} href={`/watch/s/${post.id}`}>
                  <a className="card">
                     <Box {...postProps.card}>
                        <Image {...postProps.img} src={imgUrls(post.poster_path)} />

                        <Flex {...postProps.cardContent}>
                           <Heading as="h2" fontSize={[".9rem", null, "1rem"]} mb="2">
                              {post.title}
                           </Heading>

                           <Text fontSize="13px" mb="1" fontWeight="500">
                              <ViewIcon mr="4" w={4} h={4} />
                              {post.popularity}
                           </Text>
                           <Text as="p" fontSize="13px" mb="1" fontWeight="500">
                              <TimeIcon mr="4" w={4} h={4} />
                              {post.release_date}
                           </Text>
                        </Flex>
                     </Box>
                  </a>
               </Link>
            ))}
         </Slider>
      </Box>
   )
}

const sliderProps = (function () {
   return {
      disableButtonsControls: true,
      disableDotsControls: true,
      mouseTracking: true,
      responsive: {
         0: { items: 1.3 },
         425: { items: 1.8 },
         600: { items: 2.5 },
         740: { items: 3 },
         1024: { items: 4.5 },
         1325: { items: 5 },
      },
   }
})()

// Chakra props style
const postProps = (() => {
   const card = {
      rounded: "lg",
      overflow: "hidden",
      h: "360px",
      minW: "220px",
      maxW: "250px",
      mx: [".5rem"],
      bg: "primary.200",
      minHeight: "200px",
      boxShadow: "rgba(0, 0, 0, 0.3) 0px 3px 8px",
      pos: "relative",

      _after: {
         content: '""',
         pos: "absolute",
         top: 0,
         left: 0,
         bgGradient: "linear(to-t ,#000000d9, #00000080 70%, #00000000 100%)",
         width: "100%",
         height: "100%",
         opacity: [1, null, 0],
         transition: " opacity 0.5s ease",
      },

      _hover: {
         _after: {
            opacity: 1,
         },
      },
   }

   const img = {
      minWidth: "100%",
      minHeight: "100%",
   }

   const cardContent = {
      pos: "absolute",
      p: ".8rem",
      color: "#fff",
      direction: "column",
      justify: "flex-end",
      zIndex: "1",
      top: 0,
      left: 0,
      w: "100%",
      h: "100%",
      opacity: [1, null, 0],
      transition: " opacity 0.5s ease",

      _hover: {
         opacity: 1,
      },
   }

   return { card, img, cardContent }
})()
