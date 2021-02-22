import { extendTheme } from "@chakra-ui/react"

import { purple, indigo } from "./colors"
import { Button } from "./components"

const primary = purple

export const theme = extendTheme({
   colors: {
      primary,
   },

   components: {
      Button,
   },
})
