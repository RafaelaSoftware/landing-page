import { theme as base } from "@chakra-ui/react";
import { Raleway } from "next/font/google";


// REMEMBER export this font in app/components/providers/ChakraProvider.js
export const primary = Raleway({
    weights: [400, 500, 600, 700],
    subsets: ["latin"],
    variable: "--font-primary",
});


export const fonts = {
    //For example for two fonts:  heading: `var(--font-primary), ${base.fonts?.heading}`,
    body: `var(--font-primary), ${base.fonts?.body}`,
};