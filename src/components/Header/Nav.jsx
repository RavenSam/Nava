import React from "react"
import { Box, Center, Text, Button } from "@chakra-ui/react"

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
                  <NextLink key={page.name} href={page.href}>
                     <a>
                        <Text key={page.name} p="3" fontWeight="600" fontSize=".9rem" _hover={{ color: "primary.400" }}>
                           {page.name}
                        </Text>
                     </a>
                  </NextLink>
               ))}

               <ModeSwitch />

               <Button fontSize=".9rem" size="sm">
                  Login
               </Button>
            </Box>

            <Box display={{ sm: "block", md: "none" }}>
               <DrawerNav />
            </Box>
         </Center>
      </>
   )
}
