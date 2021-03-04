export const Button = {
   // The styles all button have in common
   baseStyle: {
      fontWeight: "bold",
      textTransform: "capitalize",
      letterSpacing: "1.5px",
      border: "1px solid transparent",
      lineHeight: "normal",
      borderRadius: "20px",

      _focus: {
         boxShadow: "none",
      },

      _hover: {},
   },

   // Two sizes: sm and md
   sizes: {
      sm: {
         fontSize: "12px",
         paddingLeft: "16px",
         paddingRight: "16px",
      },
      md: {
         fontSize: "16px",
         // padding: "18px 24px ",
         paddingLeft: "24px",
         paddingRight: "24px",
      },
   },

   // Two variants: outline and solid
   variants: {
      outline: {
         borderColor: "primary.500",
         color: "primary.500",
      },
      solid: {
         bg: "primary.500",
         borderColor: "primary.500",
         color: "white",

         _hover: {
            background: "primary.700",
         },

         _active: {
            bg: "primary.900",
         },
      },
   },

   // The default size and variant values
   defaultProps: {
      size: "md",
      variant: "solid",
   },
}
