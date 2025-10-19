"use client";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
  
};

const theme = extendTheme({
    config,
    fonts: { heading: 'Inter, system-ui, sans-serif', body: 'Inter, system-ui, sans-serif' },
    colors: {
        primary: { 50: '#eaf6fb', 100: '#cdeff8', 500: '#0E79AD', 600: '#0b5f84' },
        secondary: "#0090c8",
        accent:  '#9d292b' 
    },
    components: {
        Button: {
        baseStyle: { borderRadius: '12px' },
        variants: {
            solid: { bg: 'secondary', color: 'white', _hover: { bg: 'primary.600' }, borderWidth: 1 },
            outlinePrimary: { borderColor: 'primary.500', color: 'primary.500' }
        }
        }
    }
});

export default theme;
