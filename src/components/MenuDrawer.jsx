import React from "react"
import {
   Drawer,
   DrawerBody,
   DrawerHeader,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   useDisclosure,
   IconButton,
   Button,
} from "@chakra-ui/react"
import { MenuAlt1Outline } from "heroicons-react"
import Menu from "./Menu"

export default function MenuDrawer() {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = React.useRef()

   return (
      <>
         <IconButton
            ref={btnRef}
            variant="ghost"
            aria-label="Toggle Theme Mode"
            onClick={onOpen}
            icon={<MenuAlt1Outline />}
         />

         <Drawer isOpen={isOpen} placement="bottom" onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay>
               <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Menu</DrawerHeader>

                  <DrawerBody>
                     <Menu />
                  </DrawerBody>
               </DrawerContent>
            </DrawerOverlay>
         </Drawer>
      </>
   )
}
