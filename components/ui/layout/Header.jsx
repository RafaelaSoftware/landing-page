"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Link,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "@/components/ui/Logo";
import { FaBars } from "react-icons/fa6";
import { useRef } from "react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({
    base: false,
    md: true,
  });
  const btnRef = useRef();

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
              {isDesktop ? (
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
              ) : (
                <>
                  <Button onClick={onOpen}>
                    <FaBars />
                  </Button>

                  <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>Rafaela Software</DrawerHeader>

                      <DrawerBody>hola!</DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </>
              )}
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
