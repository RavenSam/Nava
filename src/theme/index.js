import { extendTheme } from "@chakra-ui/react"

import { purple, indigo } from "./colors"
import { Button } from "./components"
import { fonts } from "./fonts"

const primary = purple

export const theme = extendTheme({
   colors: {
      primary,
   },

   components: {
      Button,
   },

   fonts,
})
