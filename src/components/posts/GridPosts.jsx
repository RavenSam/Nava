import { Heading, Text, SimpleGrid, Box, Flex } from "@chakra-ui/react"
import Link from "next/link"
import NextImage from "next/image"
import imgUrls from "../../utils/imgUrl"
import { ViewIcon, TimeIcon } from "@chakra-ui/icons"

export default function GridPosts({ posts = [] }) {
   // Return if Posts is empty
   if (!posts.length) return <Text textAlign="center">Sorry, No Posts Yet</Text>

   return (
      <SimpleGrid columns={[2, 3, 3, 4]} spacing={[".5rem", "1rem"]}>
         {posts.map((post) => (
            <Link key={post.id} href={`/watch/s/${post.id}`}>
               <a className="card">
                  <Box key={post.id} {...postProps.card}>
                     <NextImage
                        sizes="400px"
                        src={imgUrls(post.poster_path, "original")}
                        width="250px"
                        height="400px"
                        alt={post.title}
                     />

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
      </SimpleGrid>
   )
}

// Chakra props style
const postProps = (() => {
   const card = {
      rounded: "lg",
      overflow: "hidden",
      h: "100%",
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

   return { card, cardContent }
})()
