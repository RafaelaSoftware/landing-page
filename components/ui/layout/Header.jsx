import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Link,
} from "@chakra-ui/react";
import Logo from "@/components/ui/Logo";

export default function Header() {
  return (
    <Box bgColor={"primary"} position={"sticky"} top={0} right={0} zIndex={100}>
      <Container maxW={"container.xl"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          height={"140px"}
        >
          <Logo />

          <Box>
            {/* Desktop */}
            <ButtonGroup gap={2}>
              <Link href="#inicio" variant={"link"} color={"white"}>
                Inicio
              </Link>
              <Link href="#nosotros" variant={"link"} color={"white"}>
                Sobre Nosotros
              </Link>

              <Link href="#servicios" variant={"link"} color={"white"}>
                Servicios
              </Link>
              <Link href="#clientes" variant={"link"} color={"white"}>
                Casos de Éxito
              </Link>
              <Link href="#contacto" variant={"link"} color={"white"}>
                Contacto
              </Link>
            </ButtonGroup>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
