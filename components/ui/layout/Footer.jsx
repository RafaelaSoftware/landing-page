import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";

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
              <img src="/images/iconos/icono-dirreccion.svg" />
            </Box>
            <Text>Las Araucarias 1520, Rafaela, Santa Fe, ARG.</Text>
          </HStack>
          <HStack>
            <Box width={"30px"} height={"30px"}>
              <img src="/images/iconos/icono-instagram.svg" />
            </Box>
            <Text>@rafaelasoftware</Text>
          </HStack>
          <HStack>
            <Box width={"30px"} height={"30px"}>
              <img src="/images/iconos/icono-mail.svg" />
            </Box>
            <Text>info@rafaelasoftware.com.ar</Text>
          </HStack>
          <HStack>
            <Box width={"30px"} height={"30px"}>
              <img src="/images/iconos/icono-telefono.svg" />
            </Box>
            <Text>+54 3492 695991</Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
