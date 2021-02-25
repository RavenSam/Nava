import { useRouter } from "next/router"
import {
   Flex,
   Spacer,
   Box,
   Menu,
   MenuButton,
   Button,
   MenuList,
   MenuItem,
   Heading,
   MenuOptionGroup,
   MenuItemOption,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

import MenuDrawer from "../components/MenuDrawer"

export default function Filter({ sortBy, setSortBy }) {
   const path = useRouter().pathname
   const heading = path.split("/")[2]

   const handleChange = (e) => setSortBy(e)

   const menuButtonProps = {
      variant: "ghost",
      fontWeight: "700",
      fontSize: ".8rem",
      border: "1px solid grey",
   }

   return (
      <Flex
         my="3"
         px={{ base: "1rem", md: "2rem" }}
         direction={{ base: "column", md: "row" }}
         alignItems={{ md: "center" }}
      >
         <Heading as="h1" my="3" textTransform="capitalize">
            {heading}
         </Heading>

         <Spacer />

         <Flex>
            <Box d={{ base: "block", md: "none" }}>
               <MenuDrawer />
            </Box>

            <Spacer />

            <Menu>
               <MenuButton {...menuButtonProps} as={Button} rightIcon={<ChevronDownIcon />}>
                  Sort By
               </MenuButton>

               <MenuList>
                  <MenuOptionGroup onChange={handleChange} defaultValue={sortBy} title="Sort By" type="radio">
                     <MenuItemOption value="release_date.desc">New</MenuItemOption>
                     <MenuItemOption value="popularity.desc">Popular</MenuItemOption>
                  </MenuOptionGroup>
               </MenuList>
            </Menu>
         </Flex>
      </Flex>
   )
}
