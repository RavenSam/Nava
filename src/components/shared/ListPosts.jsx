import { Heading, Text, SimpleGrid, Box, Image, Flex } from "@chakra-ui/react"
import Link from "next/link"
import imgUrls from "../../utils/imgUrl"
import excerpt from "../../utils/excerpt"
import { ViewIcon, TimeIcon, ArrowUpDownIcon } from "@chakra-ui/icons"

export default function ListPosts({ posts = [] }) {
   // Return if Posts is empty
   if (!posts.length) return <Text textAlign="center">Sorry, No Posts Yet</Text>

   return (
      <SimpleGrid columns={[1, null, null, null, 2]} spacing={[".5rem", "1rem"]}>
         {posts.map((post) => (
            <Link href="#">
               <a className="card">
                  <Box key={post.id} {...postProps().card}>
                     <Image {...postProps().img} src={imgUrls(post.poster_path)} />

                     <Box {...postProps().content}>
                        <Heading as="h2" fontSize={[".9rem", null, "1rem"]} maxW="80%" mb="2">
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
                        <Text as="p" fontSize="13px" mb="1" fontWeight="500">
                           <ArrowUpDownIcon mr="4" w={4} h={4} />
                           {`${post.vote_average}/10`}
                        </Text>

                        <Text d={["none", "block"]} as="p" fontSize="13px" maxW="70%" fontWeight="500">
                           <strong>Synopsis: </strong>
                           {excerpt(post.overview)}
                        </Text>
                     </Box>
                  </Box>
               </a>
            </Link>
         ))}
      </SimpleGrid>
   )
}

// Chakra props style
const postProps = () => {
   const card = {
      display: "-webkit-box",
      borderRadius: "md",
      overflow: "hidden",
      boxShadow: "md",
      h: "180px",
      maxW: "500px",
      mx: "auto",
   }

   const img = {
      h: "100%",
      w: "150px",
   }

   const content = {
      p: "1rem",
   }

   return { card, img, content }
}
