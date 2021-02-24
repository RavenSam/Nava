import { useState } from "react"
import { useRouter } from "next/router"
import { Button, Stack } from "@chakra-ui/react"
import { ArrowUpDownIcon } from "@chakra-ui/icons"

const menuItems = [
   { name: "All Films", icon: ArrowUpDownIcon, href: "/movies" },
   { name: "Series", icon: ArrowUpDownIcon, href: "/" },
   { name: "Featured", icon: ArrowUpDownIcon, href: "/" },
   { name: "Documents", icon: ArrowUpDownIcon, href: "/" },
   { name: "Tv Shows", icon: ArrowUpDownIcon, href: "/" },
]

export default function Menu() {
   const path = useRouter().pathname

   const buttonProps = {
      rounded: "md",
      variant: "ghost",
      fontSize: "1rem",
      textTransform: "capitalize",
      fontWeight: "400",
      justifyContent: "end",
      fontSize: ".9rem",
   }

   return (
      <>
         <Stack>
            {menuItems.map((El) => (
               <Button {...buttonProps} isActive={El.href === path} leftIcon={<El.icon d="block" />}>
                  {El.name}
               </Button>
            ))}
         </Stack>
      </>
   )
}
