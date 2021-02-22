export const Button = {
   // The styles all button have in common
   baseStyle: {
      fontWeight: "bold",
      textTransform: "uppercase",
      borderRadius: "50px",
      letterSpacing: "1.5px",
      width: "fit-content",

      _focus: {
         boxShadow: "0 0px 15px #5364bf",
      },

      _hover: {},
   },
   // Two sizes: sm and md
   sizes: {
      sm: {
         fontSize: "12px",
         padding: "16px 18px",
      },
      md: {
         fontSize: "16px",
         padding: "20px 25px",
      },
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
   // The default size and variant values
   defaultProps: {
      size: "md",
      variant: "solid",
   },
}
