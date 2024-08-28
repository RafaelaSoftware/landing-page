import ChakraProviderUI from "@/components/providers/ChakraProviderUI";
import Header from "@/components/ui/Header";
import { Container } from "@chakra-ui/react";

export const metadata = {
  title: "LANDING PAGE - RafaelaSoftware",
  description: "Descripcion de la landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProviderUI>
          {children}
        </ChakraProviderUI>
      </body>
    </html>
  );
}
