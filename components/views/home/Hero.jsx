import { HEADER_HEIGHT } from "@/enums/config";
import { Container, Flex, Heading, VStack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <VStack
      id="inicio"
      as={"section"}
      minHeight={`calc(100vh - ${HEADER_HEIGHT})`}
      scrollMarginTop={HEADER_HEIGHT}
      alignContent={"center"}
      justifyContent={"center"}
      backgroundImage={"url(./images/hero.webp)"}
      backgroundPosition={"center center"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >
      <Container maxW={"container.xl"}>
        <Flex width={"100%"} justifyContent={"flex-end"}>
          <Heading
            as={"h1"}
            color={"primary"}
            textAlign={"right"}
            fontSize={{ base: "4xl", md: "5xl" }}
          >
            <Flex flexDirection={"column"}>
              <span>Transformando industrias</span>
              <span>con soluciones tecnológicas</span>
              <span>innovadoras y globales</span>
            </Flex>
          </Heading>
        </Flex>
      </Container>
    </VStack>
  );
}
