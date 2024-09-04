import TitleSection from "@/components/ui/TitleSection";
import { ServicesArticle } from "@/components/ui/views/home/ServicesArticles";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function Services() {
  return (
    <Box
      minHeight={"calc(100vh - 100px)"}
      id="servicios"
      scrollMarginTop={"100px"}
      as={"section"}
      aria-labelledby="section-servicios"
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
            as={"h5"}
            color={"secondary"}
            fontSize={{ base: "lg", md: "xl" }}
            width={"full"}
            textAlign={"center"}
            mb={10}
          >
            Softwares a medida diseñados e implementados por RS
          </Heading>

          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={{ base: 2, md: 4 }}
            fontSize={{ base: "sm", md: "md" }}
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
