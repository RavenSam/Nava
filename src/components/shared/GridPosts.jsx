import { Heading, Text, SimpleGrid, Box, Image, Flex } from "@chakra-ui/react"
import Link from "next/link"
import imgUrls from "../../utils/imgUrl"
import { ViewIcon, TimeIcon } from "@chakra-ui/icons"

export default function GridPosts({ posts = [] }) {
   // Return if Posts is empty
   if (!posts.length) return <Text textAlign="center">Sorry, No Posts Yet</Text>

   return (
      <SimpleGrid columns={[2, 3, 3, 4]} spacing={[".5rem", "1rem"]}>
         {posts.map((post) => (
            <Link href="#">
               <a className="card">
                  <Box key={post.id} {...postProps().card}>
                     <Image {...postProps().img} src={imgUrls(post.poster_path)} />

                     <Flex {...postProps().cardContent}>
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
const postProps = () => {
   const card = {
      rounded: "lg",
      overflow: "hidden",
      h: "100%",
      bg: "primary.200",
      minHeight: "200px",
      boxShadow: "md",
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
}
