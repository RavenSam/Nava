export const Button = {
   // The styles all button have in common
   baseStyle: {
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "1.5px",

      _focus: {
         boxShadow: "none",
      },

      _hover: {},
   },

   // Two variants: outline and solid
   variants: {
      outline: {
         border: "2px solid",
         borderColor: "primary.500",
         color: "primary.500",
      },
      solid: {
         bg: "primary.500",
         color: "white",

         _hover: {
            background: "primary.700",
         },
      },
   },
}
