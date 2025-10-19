"use client";

import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import theme from "@/themes/theme";
import { Box, ChakraProvider} from "@chakra-ui/react";
import { ReactNode } from "react";


interface ProvidersProps {
  children: ReactNode;
}

export function Providers({
  children,
}: ProvidersProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Box as="main" flex="1" mt={"100px"}>
          {children}
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

