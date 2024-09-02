import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Grid,
  GridItem,
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
      bg={"tertiary"}
    >
      <Container maxW={"container.xl"}>
        <Grid templateColumns={"260px 1fr"} height={"100px"}>
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100%"}
          >
            <Logo />
          </GridItem>
          <GridItem>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              {isMobile ? (
                <Button>
                  <FaBars />
                </Button>
              ) : (
                <ButtonGroup gap={2} color={"secondary"} fontWeight={"bold"}>
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
                    Clientes
                  </Link>
                  <Link href="#contacto" variant={"link"}>
                    Contacto
                  </Link>
                </ButtonGroup>
              )}
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
