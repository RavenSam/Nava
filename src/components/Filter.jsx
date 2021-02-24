import React from "react"
import { useRouter } from "next/router"
import { Flex, Spacer, Box, Menu, MenuButton, Button, MenuList, MenuItem, Heading } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

import MenuDrawer from "../components/MenuDrawer"

export default function Filter({}) {
   const path = useRouter().pathname
   const heading = path.split("/")[2]

   const menuButtonProps = {
      variant: "ghost",
      fontWeight: "700",
      fontSize: ".8rem",
      border: "1px solid grey",
   }

   return (
      <Flex
         my="5"
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
                  Sort by
               </MenuButton>
               <MenuList>
                  <MenuItem>Popular</MenuItem>
                  <MenuItem>New</MenuItem>
               </MenuList>
            </Menu>
         </Flex>
      </Flex>
   )
}
