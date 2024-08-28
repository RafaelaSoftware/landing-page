import TitleSection from "@/components/ui/TitleSection";
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Services() {
  function ServicesArticle({
    title,
    description,
    subtitle,
    benefits,
    secondarySubtitle = null,
    appsDesigned = null,
    linkLabel = null,
    btnLabel,
  }) {
    function CardBenefits({ children }) {
      return (
        <GridItem bgColor={"#ededed"} borderRadius={4} padding={4}>
          <Text textAlign={"justify"}>{children}</Text>
        </GridItem>
      );
    }
    return (
      <Box minHeight={"calc(100vh - 140px)"}>
        <Heading as={"h3"} fontSize={"xl"}>
          {title}
        </Heading>
        <Box>
          <Text textAlign={"justify"}>{description}</Text>

          <Heading as={"h4"} fontSize={"lg"} my={2}>
            {subtitle}
          </Heading>

          <Grid templateColumns={`repeat(${benefits.length}, 1fr)`} gap={3}>
            {benefits.map((benefit) => (
              <CardBenefits key={benefit}>{benefit}</CardBenefits>
            ))}
          </Grid>

          {secondarySubtitle && (
            <Heading as={"h4"} fontSize={"lg"} my={2}>
              {secondarySubtitle}
            </Heading>
          )}

          {appsDesigned && (
            <Grid templateColumns={`repeat(2, 1fr)`} gap={3}>
              {appsDesigned.map((app) => (
                <CardBenefits key={app}>{app}</CardBenefits>
              ))}
            </Grid>
          )}

          {linkLabel && (
            <Box my={2}>
              <Link href={"#"} textDecoration={"underline"} isExternal>
                {linkLabel}
              </Link>
            </Box>
          )}

          <Center my={2}>
            <Button>{btnLabel}</Button>
          </Center>
        </Box>
      </Box>
    );
  }

  return (
    <Box minHeight={"calc(100vh - 140px)"} id="servicios">
      <TitleSection>Servicios</TitleSection>

      <Container maxW={"container.xl"}>
        <ServicesArticle
          title={"Implementación ERP Calipso Corporate"}
          description={`En Rafaela Software somos partners de ERP Calipso. El objetivo es
            favorecer la sinergia con empresas que sumen su expertise funcional
            y de consultoría al core tecnológico de Calipso. La participación de
            socios integradores posibilita formar parte de un equipo de servicio
            altamente profesional experto en las soluciones de Calipso.`}
          subtitle={"¿Cuáles son los beneficios de esta unión?"}
          benefits={[
            "Acceso y coordinación a una gran variedad de soluciones tecnológicas en función de sus posibilidades.",
            "Disponer de profesionales altamente calificados para soportar su modelo de negocio.",
            "Asegurar la calidad de los productos y servicios provistos.",
          ]}
          linkLabel={
            "Para más información visitá la web oficial (link) de Calipso"
          }
          btnLabel={"Solicitar DEMO Calipso"}
        />

        <ServicesArticle
          title={"Sistema MES"}
          description={`Ofrecemos el desarrollo e implementación de un Sistema MES (Manufacturing Execution System) enfocado al control de la producción, que monitorea y documenta la gestión de la planta. El propósito de estos sistemas de software aplicados a industrias es aumentar la eficiencia de la planta de producción manteniendo conexión con las demás áreas de la empresa.`}
          subtitle={
            "¿Cuáles son los beneficios de implementar MES con nosotros?"
          }
          benefits={[
            "Medir los costos reales de producción sin la posibilidad de error humano.",
            "Calcular el rendimiento de cada unidad productiva, así como las razones de pérdida de eficiencia.",
            "Permitir reaccionar a eventos productivos dónde y cuándo se producen, evitando pérdidas de valor y tiempo.",
          ]}
          btnLabel={"Solicitar Sistema RS-MES"}
        />

        <ServicesArticle
          title={"Software a medida"}
          description={`Ofrecemos sistemas a medida que permiten mejorar, facilitar y agilizar sus circuitos administrativos, de producción e información. En Rafaela Software S.A. contamos con un equipo multidisciplinario de expertos en desarrollo y programación a medida de software, capaces de desarrollar y programar sistemas para los proyectos más exigentes. Diseñamos softwares con aspecto amigable para el usuario, lo que permite fluidez y comodidad en la navegación de las aplicaciones. La intuición para nosotros es fundamental, y para eso nos ocupamos en conocer en profundidad tu negocio.`}
          subtitle={
            "¿Cuáles son los beneficios de incorporar servicios a medida para tu empresa?"
          }
          benefits={[
            "100% ajustable a tus necesidades y requerimientos, podemos integrarlo a los sistemas ya existentes.",
            "Flexibilidad de cambio, ampliación o ajustes sobre el software a medida que la empresa lo usa.",
            "Soporte técnico directo con nuestro equipo de desarrollo y mantenimiento.",
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
          btnLabel={"Solicitar Software A GUSTO"}
        />
      </Container>
    </Box>
  );
}
