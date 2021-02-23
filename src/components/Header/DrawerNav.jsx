import React from "react"
import NextLink from "next/link"
import ModeSwitch from "../shared/ModeSwitch"
import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons"
import {
   Drawer,
   DrawerBody,
   DrawerFooter,
   IconButton,
   DrawerOverlay,
   DrawerHeader,
   DrawerContent,
   DrawerCloseButton,
   Button,
   Divider,
   Center,
   Text,
   useDisclosure,
} from "@chakra-ui/react"

import { linkPages } from "./linkPages"

export default function DrawerNav() {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = React.useRef()

   return (
      <>
         <IconButton ref={btnRef} variant="ghost" fontSize="2xl" onClick={onOpen} icon={<HamburgerIcon />} />

         <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay>
               <DrawerContent>
                  <DrawerCloseButton my="10px" />

                  <DrawerHeader pt="3.5rem">
                     <Divider mb="1rem" />
                     <Button fontSize=".9rem" size="sm">
                        Login
                     </Button>
                  </DrawerHeader>

                  <DrawerBody>
                     <Center flexDirection="column" height="100%">
                        {linkPages.map((page) => (
                           <React.Fragment key={page.name}>
                              <NextLink href={page.href}>
                                 <a style={{ width: "100%" }}>
                                    <Text
                                       p="3"
                                       fontSize="18px"
                                       fontWeight="600"
                                       letterSpacing="1.5px"
                                       w="100%"
                                       borderLeft="3px solid transparent"
                                       _hover={{ color: "primary.400", borderLeftColor: "primary.400" }}
                                    >
                                       {page.name}
                                    </Text>
                                 </a>
                              </NextLink>
                              <Divider />
                           </React.Fragment>
                        ))}
                     </Center>
                  </DrawerBody>

                  <DrawerFooter justifyContent="space-around">
                     <ModeSwitch />

                     <SettingsIcon fontSize="xl" />
                  </DrawerFooter>
               </DrawerContent>
            </DrawerOverlay>
         </Drawer>
      </>
   )
}
