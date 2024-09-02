import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import TitleSection from "@/components/ui/TitleSection";

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
  { name: "Escorial", src: "/images/clients/escorial.png" },
  { name: "RQS", src: "/images/clients/rqs-sa.png" },
  { name: "VMC", src: "/images/clients/vmc.png" },
  { name: "FrioRaf", src: "/images/clients/frio-raf.png" },
  { name: "Panamá Seafood", src: "/images/clients/panamaSeafood.png" },
  { name: "Exportquilsa", src: "/images/clients/exportquilsa.png" },
];

export default function Clients() {
  return (
    <Box minHeight={"calc(100vh - 140px)"} id="clientes">
      <TitleSection>Clientes</TitleSection>

      <Container maxW={"container.lg"}>
        <Grid
          templateColumns={{ base: "1fr 1fr", md: `repeat(3, 1fr)` }}
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
              display={"grid"}
              placeContent={"center"}
            >
              <img
                src={client.src}
                alt={`Logotipo de ${client.name}`}
                maxWidth={"300px"}
                width={"100%"}
                maxHeight={"200px"}
                height={"100%"}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
