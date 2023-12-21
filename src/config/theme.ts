import { extendTheme } from "@chakra-ui/react";
import { colors } from "./color";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "brand.white",
        color: "brand.black",
        fontSize: "1rem",
      },
      a: {
        color: "brand.purple.100",
      },
    },
  },
  fonts: {
    heading: "Poppins-Bold, Onest, sans-serif",
    body: "Poppins-Regular, Onest, sans-serif",
  },
  colors: colors,
  sizes: {
    gutter: {
      sm: "0.25rem",
      md: "1.25rem",
    },
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.8rem",
    md: "0.875rem",
    lg: "1rem",
    xl: "1.125rem",
    "2xl": "1.25rem",
    "3xl": "1.5rem",
    "4xl": "1.875rem",
    "5xl": "1.923rem",
    "6xl": "2.084rem",
    "7xl": "3.125rem",
    "8xl": "3.75rem",
    "9xl": "4.375rem",
    "1xxl": "5.168rem",
    "2xxl": "4rem",
  },
});
