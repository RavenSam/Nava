import { Heading, Text, SimpleGrid, Box, Image, Flex, HStack } from "@chakra-ui/react"
import Link from "next/link"
import imgUrls from "../../utils/imgUrl"
import excerpt from "../../utils/excerpt"
import { ViewIcon, TimeIcon } from "@chakra-ui/icons"
import Rating from "react-rating"
import { Star, StarOutline } from "heroicons-react"

export default function ListPosts({ posts = [] }) {
   // Return if Posts is empty
   if (!posts.length) return <Text textAlign="center">Sorry, No Posts Yet</Text>

   return (
      <SimpleGrid columns={[1, null, null, null, 2]} spacing={[".5rem", "1rem"]}>
         {posts.map((post) => (
            <Link href="#">
               <a className="card">
                  <Flex key={post.id} {...postProps.card}>
                     <Image {...postProps.img} src={imgUrls(post.poster_path)} />

                     <Box {...postProps.content}>
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

                        <HStack color="primary.500">
                           <Rating
                              initialRating={post.vote_average}
                              stop={10}
                              step={2}
                              emptySymbol={<StarOutline />}
                              fullSymbol={<Star />}
                              readonly
                           />
                        </HStack>

                        <Text d={["none", "block"]} as="p" fontSize="13px" fontWeight="500">
                           <strong>Synopsis: </strong>
                           {excerpt(post.overview)}
                        </Text>
                     </Box>
                  </Flex>
               </a>
            </Link>
         ))}
      </SimpleGrid>
   )
}

// Chakra props style
const postProps = (() => {
   const card = {
      borderRadius: "lg",
      overflow: "hidden",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      h: ["140px", "180px"],
   }

   const img = {
      h: "100%",
      w: ["120px", "150px"],
   }

   const content = {
      p: "1rem",
      flex: "1",
   }

   return { card, img, content }
})()
