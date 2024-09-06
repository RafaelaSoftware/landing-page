import ChakraProviderUI from "@/components/providers/ChakraProviderUI";

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
