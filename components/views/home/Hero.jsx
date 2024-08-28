import { Heading, VStack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <VStack
      id="inicio"
      minHeight={"calc(100vh - 140px)"}
      alignContent={"center"}
      justifyContent={"center"}
      backgroundImage={"url(./images/hero.jpg)"}
      backgroundPosition={"center center"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >
      <Heading as={"h1"} fontSize={"4xl"} color={"white"} textAlign={"center"}>
        Transformando industrias con soluciones tecnológicas innovadoras
      </Heading>
    </VStack>
  );
}
