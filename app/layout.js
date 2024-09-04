import ChakraProviderUI from "@/components/providers/ChakraProviderUI";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: "Descripcion de la landing page",
  authors: [
    {
      name: "Rafaela Software S.A.",
      email: "info@rafaelasoftware.com.ar",
    }
  ],
  keywords: "rafaelasoftware, ERP Calipso Corporate, Sistema MES, Software a medida, Rafaela Software S.A.",
  image: "/images/logo.svg",
  url: process.env.NEXT_PUBLIC_APP_URL,
  type: "website",
  siteName: "RafaelaSoftware",
  locale: "es_ES",


  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@rafaelasoftware",
    images: ["/images/logo.svg"],
  },
  robots: "index, follow",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: process.env.NEXT_PUBLIC_APP_URL,
    site_name: process.env.NEXT_PUBLIC_APP_NAME,
    title: process.env.NEXT_PUBLIC_APP_NAME,
    description: "Descripcion de la landing page",
    image: "/images/landing-page.jpg",
  },
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
