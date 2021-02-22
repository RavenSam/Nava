import { extendTheme } from "@chakra-ui/react"

import { primary } from "./colors"
import { Button } from "./components"

export const theme = extendTheme({
   colors: {
      primary,
   },

   components: {
      Button,
   },
})
