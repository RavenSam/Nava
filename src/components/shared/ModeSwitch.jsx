import { IconButton, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

export default function ModeSwitch() {
   const { colorMode, toggleColorMode } = useColorMode()

   return (
      <IconButton
         mx="2"
         borderRadius="100%"
         variant="ghost"
         aria-label="Toggle Theme Mode"
         onClick={toggleColorMode}
         icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      />
   )
}
