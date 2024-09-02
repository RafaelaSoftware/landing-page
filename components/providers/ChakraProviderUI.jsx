"use client";
import { Box, Container, CSSReset } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import { primary } from "@/theme/foundations/fonts";
import theme from "@/theme";

import { CacheProvider } from "@chakra-ui/next-js";
import Header from "@/components/ui/layout/Header";
import Footer from "@/components/ui/layout/Footer";

export default function ChakraProviderUI({ children }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-primary: ${primary.style.fontFamily};
          }
          body {
            font-family: var(--font-primary) !important;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: var(--font-primary) !important;
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Box bgColor={"white"}>
            <Header />
            {children}
            <Footer />
          </Box>
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
