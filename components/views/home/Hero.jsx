import { Box, Container, Flex, Heading, VStack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <VStack
      id="inicio"
      minHeight={"calc(100vh - 100px)"}
      alignContent={"center"}
      justifyContent={"center"}
      backgroundImage={"url(./images/hero.jpeg)"}
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
            fontSize={"5xl"}
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
