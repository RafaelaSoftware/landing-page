import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import TitleSection from "@/components/ui/TitleSection";
import Image from "next/image";
import { HEADER_HEIGHT } from "@/enums/config";

const clientImages = [
  { name: "BolsaFilm - BLF", src: "/images/clients/bolsafilm.png" },
  { name: "Comasa", src: "/images/clients/comasa.jpg" },
  { name: "Sodecar", src: "/images/clients/sodecar.png" },
  { name: "Faben ", src: "/images/clients/faben.jpg" },
  { name: "Fexa", src: "/images/clients/fexa.png" },
  { name: "Frautschi", src: "/images/clients/frautschi.png" },
  { name: "Rafaela Alimentos", src: "/images/clients/rafaelaalimentos.png" },
  { name: "Grana", src: "/images/clients/grana.jpg" },
  { name: "Omarsa", src: "/images/clients/omarsa.png" },
  { name: "300 Indy", src: "/images/clients/300indy.png" },
  { name: "Escorial", src: "/images/clients/escorial.jpeg" },
  { name: "RQS", src: "/images/clients/rqs-sa.jpeg" },
  { name: "VMC", src: "/images/clients/vmc.png" },
  { name: "FrioRaf", src: "/images/clients/frio-raf.png" },
  { name: "Panamá Seafood", src: "/images/clients/panamaSeafood.png" },
  { name: "Exportquilsa", src: "/images/clients/exportquilsa.jpeg" },
];

export default function Clients() {
  return (
    <Box
      id="clientes"
      minHeight={`calc(100vh - ${HEADER_HEIGHT})`}
      scrollMarginTop={HEADER_HEIGHT}
    >
      <TitleSection>Clientes</TitleSection>

      <Container maxW={"container.lg"}>
        <Grid
          templateColumns={{ base: "1fr 1fr", md: `repeat(4, 1fr)` }}
          gap={4}
        >
          {clientImages.map((client) => (
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
            >
              <Box maxWidth={"150px"} maxHeight={"150px"}>
                <Image
                  src={client.src}
                  alt={`Logotipo de ${client.name}`}
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
