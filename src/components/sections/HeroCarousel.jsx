import { Flex, Spacer, Box } from "@chakra-ui/react"

import Slider from "../shared/Slider"

export default function HeroCarousel() {
   return (
      <Box my="1rem">
         <Slider sliderProps={sliderProps()}>
            <Box bg="tomato" w="100%" h="300px" p={4} color="white" className="item" data-value="1">
               This is the Box 1
            </Box>

            <Box bg="green" w="100%" h="300px" p={4} color="white" className="item" data-value="1">
               This is the Box 2
            </Box>

            <Box bg="red" w="100%" h="300px" p={4} color="white" className="item" data-value="1">
               This is the Box 3
            </Box>

            <Box bg="blue" w="100%" h="300px" p={4} color="white" className="item" data-value="1">
               This is the Box 4
            </Box>
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
