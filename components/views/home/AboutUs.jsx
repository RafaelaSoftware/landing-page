import TitleSection from "@/components/ui/TitleSection";
import { HEADER_HEIGHT } from "@/enums/config";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <Flex
      id="nosotros"
      as={"main"}
      flexDirection={"column"}
      justifyContent={"center"}
      minHeight={`calc(100vh - ${HEADER_HEIGHT})`}
      scrollMarginTop={HEADER_HEIGHT}
      itemScope
      itemType="https://schema.org/Organization"
    >
      <TitleSection>Nosotros</TitleSection>
      <Container
        maxWidth={"container.xl"}
        overflow={"visible"}
        pl={{
          base: 4,
          md: 0,
        }}
        as={"section"}
        aria-labelledby="section-nosotros"
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          height={"100%"}
          flexGrow={{ base: 0, md: 1 }}
        >
          <GridItem>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <Image
                src="/images/fotografia-cartel1.jpeg"
                alt="Rafaela Software S.A."
                width={0}
                height={0}
                sizes="100%"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  aspectRatio: "4/3",
                }}
              />
            </Box>
          </GridItem>
          <GridItem
            padding={4}
            display={"flex"}
            alignItems={"center"}
            pr={{
              base: 0,
              md: 4,
            }}
            pl={{
              base: 0,
              md: 8,
            }}
            lineHeight={{ base: 10, md: 8 }}
            fontSize={{ base: "sm", md: "md" }}
          >
            <VStack alignItems={"flex-start"}>
              <Text fontWeight={"bold"} itemProp="name">
                Rafaela Software S.A.: lo que necesites podemos hacerlo juntos
              </Text>
              <Text textAlign={"justify"} itemProp="description">
                En RS somos líderes en la provisión de soluciones tecnológicas
                avanzadas, diseñadas específicamente para optimizar y
                revolucionar procesos y gestiones industriales integrales.
                Nuestro enfoque abarca sectores vitales como el alimenticio, el
                metalúrgico, la industria del packaging y los envases, como así
                también el sector de la construcción y la industria química.
              </Text>

              <Text textAlign={"justify"} itemProp="description">
                Con una presencia sólida en el mercado nacional e internacional,
                nuestra misión es potenciar la eficiencia, productividad y
                rentabilidad de nuestros clientes a través de la innovación
                tecnológica.
              </Text>
              <Text textAlign={"justify"} itemProp="description">
                Desde la ciudad de Rafaela, provincia de Santa Fe, y con más de
                25 años de experiencia en el rubro informático y sistemas,
                nuestra firma se posiciona además como referente en consultoría
                de procesos industriales y soluciones personalizadas.
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Flex>
  );
}
