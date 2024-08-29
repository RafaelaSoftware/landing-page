import TitleSection from "@/components/ui/TitleSection";
import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <Flex
      id="nosotros"
      flexDirection={"column"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 140px)"}
    >
      <TitleSection>Sobre Nosotros</TitleSection>

      <Flex flex={1}>
        <Box width={"40%"}>
          <img src="/images/fotografia-logo.jpg" />
        </Box>
        <Box width={"60%"} paddingX={4}>
          <VStack>
            <Text textAlign={"justify"}>
              En Rafaela Software S.A., somos líderes en la provisión de
              soluciones tecnológicas avanzadas, diseñadas específicamente para
              optimizar y revolucionar procesos y gestiones industriales
              integrales. Nuestro enfoque abarca sectores vitales como el
              alimenticio, el metalúrgico, la industria del packaging y los
              envases, como así también el sector de la construcción y la
              industria química.
            </Text>

            <Text textAlign={"justify"}>
              Con una presencia sólida en el mercado nacional e internacional,
              nuestra misión es potenciar la eficiencia, productividad y
              rentabilidad de nuestros clientes a través de la innovación
              tecnológica.
            </Text>
            <Text textAlign={"justify"}>
              Desde la ciudad de Rafaela, provincia de Santa Fe, y con más de 25
              años de experiencia en el rubro informático y sistemas, nuestra
              firma se posiciona además como referente en consultoría de
              procesos industriales y soluciones personalizadas.
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
}
