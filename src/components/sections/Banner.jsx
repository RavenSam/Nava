import { Box, Image } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"

export default function Banner({ image, alt }) {
   const { colorMode } = useColorMode()

   const overColor = colorMode === "dark" ? "#1a202c" : "#fff"

   const bannerProps = {
      w: "100%",
      minH: "180px",
      maxH: "120vh",
      pos: "relative",

      _after: {
         content: "''",
         position: "absolute",
         left: 0,
         h: { base: "80%" /*  lg: "50vh" */ },
         w: "100%",
         bottom: 0,
         zIndex: 2,
         bgGradient: `linear(to-t, ${overColor}  ,transparent)`,
      },
   }

   return (
      <Box {...bannerProps}>
         <Image src={image} alt={alt} />
      </Box>
   )
}
