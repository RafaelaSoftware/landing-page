import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import Logo from "@/components/ui/Logo";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Box
      bgColor={"tertiary"}
      position={"sticky"}
      top={0}
      right={0}
      zIndex={100}
    >
      <Container maxW={"container.xl"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          height={"140px"}
        >
          <Logo />

          <Box>
            {isMobile ? (
              <>
                <Button>
                  <FaBars />
                </Button>
              </>
            ) : (
              <ButtonGroup gap={2} color={"primary"} fontWeight={"bold"}>
                {/* Desktop */}
                <Link href="#inicio" variant={"link"}>
                  Inicio
                </Link>
                <Link href="#nosotros" variant={"link"}>
                  Sobre Nosotros
                </Link>

                <Link href="#servicios" variant={"link"}>
                  Servicios
                </Link>
                <Link href="#clientes" variant={"link"}>
                  Casos de Éxito
                </Link>
                <Link href="#contacto" variant={"link"}>
                  Contacto
                </Link>
              </ButtonGroup>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
