import ChakraProviderUI from "@/components/providers/ChakraProviderUI";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
  alternates: {
    canonical: '/',
  },
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: "Líderes en la provisión de software industrial y soluciones tecnológicas para la optimización de procesos productivos., packaging, construcción y química.",
  authors: [
    {
      name: "Rafaela Software S.A.",
      email: "info@rafaelasoftware.com.ar",
    }
  ],
  keywords: "rafaelasoftware, ERP Calipso Corporate, Sistema MES, Software a medida, Rafaela Software S.A, ERP, Calipso, MES, Software, Rafaela, Santa Fe, tecnologia, software, innovacion empresarial, innovacion tecnologica, soluciones tecnologicas, economia del conocimiento, innovacion empresarial",
  image: "/images/logo.png",
  url: process.env.NEXT_PUBLIC_APP_URL,
  siteName: process.env.NEXT_PUBLIC_APP_NAME,
  type: "website",
  locale: "es_ES",


  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@rafaelasoftware",
    images: ["/images/logo.png"],
    title: "Rafaela Software S.A. | Soluciones Tecnológicas Innovadoras",
  },
  robots: "index, follow",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: process.env.NEXT_PUBLIC_APP_URL,
    site_name: process.env.NEXT_PUBLIC_APP_NAME,
    title: "Rafaela Software S.A. | Soluciones Tecnológicas Innovadoras",
    description: "Líderes en la provisión de software industrial y soluciones tecnológicas para la optimización de procesos productivos.",
    image: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-ES">
      <body>
        <ChakraProviderUI>
          {children}
        </ChakraProviderUI>
      </body>
    </html>
  );
}
