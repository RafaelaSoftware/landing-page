import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Footer() {
  return (
    <Box bgColor={"tertiary"} py={2}>
      <Container maxW={"container.xl"}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={{ base: "flex-start", md: "center" }}
          gap={4}
          minHeight={"80px"}
          height={"100%"}
        >
          <HStack>
            <Box width={"30px"} height={"30px"}>
              <Image
                src="/images/iconos/icono-dirreccion.svg"
                alt="Icono de dirección"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Text>Las Araucarias 1520, Rafaela, Santa Fe, ARG.</Text>
          </HStack>
          <HStack>
            <Box width={"30px"} height={"30px"}>
              <Image
                src="/images/iconos/icono-instagram.svg"
                alt="Icono de Instagram"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Text>@rafaelasoftware</Text>
          </HStack>
          <HStack>
            <Box width={"30px"} height={"30px"}>
              <Image
                src="/images/iconos/icono-mail.svg"
                alt="Icono de correo electrónico"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Text>info@rafaelasoftware.com.ar</Text>
          </HStack>
          <HStack>
            <Box width={"30px"} height={"30px"}>
              <Image
                src="/images/iconos/icono-telefono.svg"
                alt="Icono de teléfono"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Text>+54 3492 695991</Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
