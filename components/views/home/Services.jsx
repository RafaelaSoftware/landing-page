import TitleSection from "@/components/ui/TitleSection";
import { HEADER_HEIGHT } from "@/enums/config";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Services() {
  function ServicesArticle({
    id,
    title,
    description,
    subtitle,
    benefits,
    secondarySubtitle = null,
    appsDesigned = null,
    linkLabel = null,
    btnLabel,

    isLeft = true,
  }) {
    function CardBenefits({ children }) {
      return (
        <Flex
          position={"relative"}
          minH={"40px"}
          bgColor={"tertiary"}
          pl={4}
          py={1}
          transform={isLeft ? "skew(20deg)" : "skew(-20deg)"}
          alignItems={"center"}
          justifyContent={isLeft ? "flex-end" : "flex-start"}
          mr={4}
        >
          <Text
            textAlign={isLeft ? "right" : "left"}
            transform={isLeft ? "skew(-20deg)" : "skew(20deg)"}
            color={"secondary"}
            fontWeight={"bold"}
          >
            {children}
          </Text>
          <Box
            width={"20%"}
            bgColor={"tertiary"}
            position={"absolute"}
            right={isLeft && "-10px"}
            left={!isLeft && "-10px"}
            top={0}
            bottom={0}
            zIndex={-1}
            transform={isLeft ? "skew(-20deg)" : "skew(20deg)"}
          ></Box>
        </Flex>
      );
    }
    return (
      <Box
        id={id}
        minHeight={`calc(100vh - ${HEADER_HEIGHT})`}
        scrollMarginTop={HEADER_HEIGHT}
      >
        <Center bgColor={"secondary"} height={"60px"}>
          <Heading as={"h3"} color={"white"} fontSize={"2xl"}>
            {title}
          </Heading>
        </Center>

        <Container maxW={"container.xl"} py={10}>
          <Grid templateColumns={{ base: "1f", md: "1fr 1fr" }}>
            <GridItem order={{ base: 1, md: isLeft ? 1 : 2 }}>
              <Image
                src="/images/placeholder.png"
                alt="Rafaela Software S.A. - Servicios"
                width={0}
                height={0}
                sizes="100%"
                style={{ width: "100%", height: "auto" }}
              />
            </GridItem>
            <GridItem
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              pl={{ base: 0, md: isLeft && 4 }}
              pr={{ base: 0, md: !isLeft && 4 }}
              order={{ base: 2, md: isLeft ? 2 : 1 }}
            >
              <Box lineHeight={8} textAlign={"justify"}>
                {description}
              </Box>
              <Box>
                <Heading
                  as={"h4"}
                  fontSize={"md"}
                  my={2}
                  fontWeight={"normal"}
                  width={"full"}
                  textAlign={isLeft ? "right" : "left"}
                >
                  {subtitle}
                </Heading>

                <Flex
                  flexDirection={"column"}
                  gap={4}
                  pl={isLeft && 4}
                  mr={{ base: 0, md: 0 }}
                >
                  {benefits.map((benefit) => (
                    <CardBenefits key={benefit}>{benefit}</CardBenefits>
                  ))}
                </Flex>
              </Box>
            </GridItem>
          </Grid>

          <Center mt={10}>
            <Button
              bgColor={"#75ba63"}
              color={"white"}
              pl={8}
              position={"relative"}
              _hover={{
                transform: "translateY(-2px)",
              }}
              borderRadius={2}
            >
              <Box
                position={"absolute"}
                left={-4}
                transform={"translateX(-20px)"}
                fontSize={"40px"}
              >
                <Image
                  src="/images/iconos/icono-info.svg"
                  alt="Icono de WhatsApp - Quiero solicitar demo"
                  height={60}
                  width={60}
                />
              </Box>
              {btnLabel}
            </Button>
          </Center>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      minHeight={"calc(100vh - 100px)"}
      id="servicios"
      scrollMarginTop={"100px"}
    >
      <TitleSection>Servicios</TitleSection>
      <ServicesArticle
        id="ERPCalipso"
        title={"Implementación ERP Calipso Corporate"}
        description={
          <>
            <Text fontWeight={"bold"}>
              En Rafaela Software somos partners de Calipso Corporate.
            </Text>
            <Text>
              El objetivo es favorecer la sinergia con empresas que sumen su
              expertise funcional y de consultoría al core tecnológico de
              Calipso. La participación de socios integradores posibilita formar
              parte de un equipo de servicio altamente profesional experto en
              las soluciones que ofrece la firma, con alcance nacional e
              internacional.
            </Text>
          </>
        }
        subtitle={"¿Cuáles son los beneficios de esta unión?"}
        benefits={[
          "Acceso a una gran variedad de soluciones tecnológicas",
          "Profesionales altamente calificados para su modelo de negocio",
          "Máxima calidad de los productos y servicios provistos",
        ]}
        linkLabel={
          "Para más información visitá la web oficial (link) de Calipso"
        }
        btnLabel={"¡Quiero solicitar demo de ERP Calipso!"}
      />

      <ServicesArticle
        id="SistemaMES"
        title={"Sistema MES"}
        description={
          <>
            <Text>
              Ofrecemos el desarrollo e implementación de un{" "}
              <span style={{ fontWeight: "bold" }}>
                Sistema MES (Manufacturing Execution System)
              </span>{" "}
              enfocado al control de la producción, que monitorea y documenta la
              gestión de la planta. El propósito de estos sistemas de software
              aplicados a industrias es aumentar la eficiencia de la planta de
              producción manteniendo conexión con las demás áreas de la empresa.
            </Text>
          </>
        }
        subtitle={"¿Cuáles son los beneficios del sistema MES?"}
        benefits={[
          "Medir los costos de producción sin la posibilidad de error humano",
          "Calcular el rendimiento de cada unidad productiva",
          "Permitir reaccionar a eventos productivos dónde y cuándo se producen",
        ]}
        btnLabel={"¡Quiero solicitar demo del Sistema MES!"}
        isLeft={false}
      />

      <ServicesArticle
        id="SoftwareMedida"
        title={"Software a medida"}
        description={
          <>
            <Text>
              Ofrecemos sistemas a medida que permiten mejorar, facilitar y
              agilizar sus circuitos administrativos, de producción e
              información. En Rafaela Software S.A. contamos con un equipo
              multidisciplinario de expertos en desarrollo y programación a
              medida de software, capaces de desarrollar y programar sistemas
              para los proyectos más exigentes. Diseñamos softwares con aspecto
              amigable para el usuario, lo que permite fluidez y comodidad en la
              navegación de las aplicaciones. La intuición para nosotros es
              fundamental, y para eso nos ocupamos en conocer en profundidad tu
              negocio.
            </Text>
          </>
        }
        subtitle={"¿Cuáles son los beneficios de un software a medida?"}
        benefits={[
          "100% ajustable a tus necesidades, adaptable a sistemas ya existentes",
          "Flexibilidad de cambio, ampliación o ajustes sobre el soft funcionando",
          " Soporte técnico directo: equipo propio de desarrollo y mantenimiento",
        ]}
        secondarySubtitle={"Aplicaciones diseñadas al momento:"}
        appsDesigned={[
          "Data analytics, tableros administrativos o dashboards",
          "Desarrollo de app móviles",
          "Toma de datos por colectora (gestión de almacenes, toma física de inventario, expedición, despacho de mercadería o recepción de mercadería)",
          "Administración y gestión de pedidos y preventa",
          "Integración con sistema de entes de regulación nacional y provinciales",
          "Integración con hardware o dispositivos externos (balanzas, caudalímetro, colectora)",
          "Integración con sistemas de calidad y trazabilidad",
        ]}
        linkLabel={"¡En el mundo de hoy, todo es programable!"}
        btnLabel={"¡Quiero solicitar Software a medida!"}
      />
      {/* Softwares a medida diseñados e implementados por RS */}
      <Box bgColor={"tertiary"} py={10} mb={10}>
        <Container maxW={"container.lg"}>
          <Heading
            as={"h6"}
            color={"secondary"}
            fontSize={"xl"}
            width={"full"}
            textAlign={"center"}
            mb={10}
          >
            Softwares a medida diseñados e implementados por RS
          </Heading>

          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={{ base: 2, md: 4 }}
          >
            <GridItem display={"flex"} flexDirection={"column"} gap={2}>
              <Text>
                - Data analytics, tableros administrativos o dashboards
              </Text>
              <Text>- Desarrollo de app móviles</Text>

              <Text>
                - Toma de datos por colectora: gestión de almacenes, toma física
                de inventario, expedición, despacho de mercadería o recepción de
                mercadería
              </Text>

              <Text>- Administración y gestión de pedidos y preventa</Text>
            </GridItem>
            <GridItem display={"flex"} flexDirection={"column"} gap={2}>
              <Text>
                - Integración con sistema de entes de regulación nacional y
                provinciales
              </Text>
              <Text>
                - Integración con hardware o dispositivos externos:
                caudalímetros, sensores y balanzas
              </Text>
              <Text>- Integración con sistemas de calidad y trazabilidad</Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
