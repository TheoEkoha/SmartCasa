import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: "white",
        color: "white",
      },
    }),
  },
  fonts: {
    heading: "Stem, sans-serif",
    body: "Stem, sans-serif",
  },
});

export default theme;
