import { Box, Container, Divider, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box height={"120px"} bgColor={"primary"} py={2}>
      <Container maxW={"container.xl"}>
        <Text textColor={"white"}>E-mail: info@rafaelasoftware.com.ar</Text>
        <Text textColor={"white"}>Cel.: +54 3492 695991</Text>
        <Text textColor={"white"}>
          Dirección: Las Araucarias 1520, Rafaela, Santa Fe, ARG.
        </Text>

        <Divider my={2} />

        <Text textColor={"white"}>
          © {new Date().getFullYear()} RafaelaSoftware. Todos los derechos
          reservados.
        </Text>
      </Container>
    </Box>
  );
}
