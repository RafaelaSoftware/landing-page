import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import TitleSection from "@/components/ui/TitleSection";
import Image from "next/image";
import { HEADER_HEIGHT } from "@/enums/config";
import Link from "next/link";

const clientImages = [
  {
    name: "Faben ",
    src: "/images/clients/faben.jpg",
    link: "https://faben.com.ar/",
  },
  { name: "VMC", src: "/images/clients/vmc.png", link: "https://vmc.com.ar/" },
  {
    name: "FrioRaf",
    src: "/images/clients/frio-raf.png",
    link: "https://frioraf.com.ar/",
  },
  {
    name: "RQS",
    src: "/images/clients/rqs-sa.jpeg",
    link: "https://rqs-sa.com/",
  },
  {
    name: "ENGRACOR",
    src: "/images/clients/engracor.webp",
    link: "https://engracor.com/",
  },
  {
    name: "Fexa",
    src: "/images/clients/fexa.png",
    link: "https://fexa.com/",
  },
  {
    name: "Frautschi",
    src: "/images/clients/frautschi.png",
    link: "https://frautschi.com.ar/",
  },
  {
    name: "Comasa",
    src: "/images/clients/comasa.jpg",
    link: "https://comasa.com.ar/comasa/index.php",
  },
  {
    name: "300 Indy",
    src: "/images/clients/300indy.png",
    link: "https://pongolini.com/",
  },
  {
    name: "Exportquilsa",
    src: "/images/clients/exportquilsa.jpeg",
    link: "https://exportquilsa.com/es/",
  },
  {
    name: "IMAI",
    src: "/images/clients/imai_logo.svg",
    link: "https://imai.net/",
  },
  {
    name: "Escorial",
    src: "/images/clients/escorial.jpeg",
    link: "https://escorial.com.ar/",
  },
  {
    name: "Latina",
    src: "/images/clients/redalatina.jpg",
    link: "http://www.latinapro.com.ar/",
  },

  {
    name: "Omarsa",
    src: "/images/clients/omarsa.png",
    link: "https://www.omarsa.com.ec/?lang=es",
  },
  {
    name: "Rafaela Alimentos",
    src: "/images/clients/rafaelaalimentos.png",
    link: "https://www.rafaelaalimentos.com/",
  },

  {
    name: "Panamá Seafood",
    src: "/images/clients/panamaSeafood.png",
    link: "https://www.linkedin.com/company/panama-seafood-group-s-a/",
  },
  {
    name: "",
    src: "",
    link: "",
  },
  {
    name: "Grana",
    src: "/images/clients/grana.jpg",
    link: "https://www.granain.com/",
  },
  {
    name: "Sodecar",
    src: "/images/clients/sodecar.png",
    link: "https://www.sodecar.com/",
  },
  {
    name: "BolsaFilm - BLF",
    src: "/images/clients/bolsafilm.png",
    link: "https://www.bolsafilm.com.ar/",
  },
];

export default function Clients() {
  return (
    <Box
      id="clientes"
      as="section"
      minHeight={`calc(100vh - ${HEADER_HEIGHT})`}
      scrollMarginTop={HEADER_HEIGHT}
      itemScope
      itemType="https://schema.org/Organization"
    >
      <TitleSection>Clientes</TitleSection>

      <Container maxW={"container.lg"}>
        <Grid
          templateColumns={{ base: "1fr 1fr", md: `repeat(4, 1fr)` }}
          gap={4}
        >
          {clientImages.map((client) => {
            if (client.name === "")
              return (
                <GridItem
                  key={client.name}
                  padding={4}
                  filter={"grayscale(100%)"}
                  transition={"all 0.3s"}
                  _hover={{
                    filter: "grayscale(0%)",
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={"100%"}
                ></GridItem>
              );

            return (
              <GridItem
                key={client.name}
                padding={4}
                filter={"grayscale(100%)"}
                transition={"all 0.3s"}
                _hover={{
                  filter: "grayscale(0%)",
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                itemScope
                itemType="https://schema.org/Brand"
                itemProp="brand"
              >
                <Link
                  href={client.link || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box maxWidth={"150px"} maxHeight={"150px"}>
                    <Image
                      src={client.src}
                      alt={`Logotipo de ${client.name}`}
                      width={0}
                      height={0}
                      sizes="100%"
                      style={{ width: "100%", height: "auto" }}
                      itemProp="logo"
                      itemScope
                      itemType="https://schema.org/ImageObject"
                    />
                  </Box>
                  <span itemProp="name" style={{ display: "none" }}>
                    {client.name}
                  </span>
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
