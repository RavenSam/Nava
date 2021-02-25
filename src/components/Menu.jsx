import { useRouter } from "next/router"
import NextLink from "next/link"
import { Button, Stack } from "@chakra-ui/react"

import { menuItems } from "../config/menuItems"

export default function Menu() {
   const path = useRouter().pathname

   const buttonProps = {
      rounded: "md",
      variant: "ghost",
      fontSize: "1rem",
      textTransform: "capitalize",
      fontWeight: "500",
      justifyContent: "end",
      fontSize: ".9rem",
   }

   return (
      <>
         <Stack>
            {menuItems.map((El) => (
               <NextLink key={El.name} href={El.href}>
                  <a>
                     <Button {...buttonProps} isActive={El.href === path} w="100%" leftIcon={<El.icon d="block" />}>
                        {El.name}
                     </Button>
                  </a>
               </NextLink>
            ))}
         </Stack>
      </>
   )
}
