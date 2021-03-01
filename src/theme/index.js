import { extendTheme } from "@chakra-ui/react"
import { purpleC, indigoC } from "./colors"
import { Button } from "./components"
import { fonts } from "./fonts"

const primary = purpleC

export const theme = extendTheme({
   colors: {
      primary,
      indigoC,
      purpleC,
   },

   components: {
      Button,
   },

   fonts,
})
