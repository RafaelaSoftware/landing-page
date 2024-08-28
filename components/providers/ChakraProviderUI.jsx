"use client";
import { Box, Container, CSSReset } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import { primary } from "@/theme/foundations/fonts";
import theme from "@/theme";

import { CacheProvider } from "@chakra-ui/next-js";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

export default function ChakraProviderUI({ children }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-primary: ${primary.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Box bgColor={"gray.50"}>
            <Header />
            {/* <Container
              maxW="container.xl"
              minHeight={"100vh"}
              display={"flex"}
              flexDirection={"column"}
            >
            </Container> */}
            {children}
            <Footer />
          </Box>
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
