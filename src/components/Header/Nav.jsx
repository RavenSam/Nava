import React from "react"
import { Box, Center, Text, LinkOverlay } from "@chakra-ui/react"

import NextLink from "next/link"

import ModeSwitch from "../shared/ModeSwitch"

import DrawerNav from "./DrawerNav"

import { linkPages } from "./linkPages"

export default function Nav() {
   return (
      <>
         <Center>
            <Box display={{ base: "none", md: "flex" }} alignItems="center" justifyContent="center">
               {linkPages.map((page) => (
                  <Text key={page.name} mx="3">
                     <NextLink href={page.href}>
                        <a>{page.name}</a>
                     </NextLink>
                  </Text>
               ))}

               <ModeSwitch />
            </Box>

            <Box display={{ sm: "block", md: "none" }}>
               <DrawerNav />
            </Box>
         </Center>
      </>
   )
}
