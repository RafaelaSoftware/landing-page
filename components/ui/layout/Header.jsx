"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "@/components/ui/Logo";
import { FaAngleDown, FaBars } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import colors from "@/theme/foundations/colors";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenCollapse, onToggle: onToggleCollapse } =
    useDisclosure();

  const isDesktop = useBreakpointValue({
    base: false,
    md: true,
  });
  const btnRef = useRef();

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const targetId = event.target.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        const headerOffset = document.querySelector("header").offsetHeight;
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

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
                  <Popover trigger="hover" placement="bottom-start">
                    <PopoverTrigger>
                      <Link href="#servicios" variant={"link"}>
                        <Flex alignItems={"center"} gap={1}>
                          Servicios
                          <FaAngleDown />
                        </Flex>
                      </Link>
                    </PopoverTrigger>
                    <PopoverContent
                      bgColor={"tertiary"}
                      borderColor={"secondary"}
                    >
                      <PopoverArrow
                        bgColor={"tertiary"}
                        color={"secondary"}
                        boxShadow={`-1px -1px 0px 0 ${colors["secondary"]}`}
                      />
                      <PopoverBody>
                        <ButtonGroup
                          gap={2}
                          color={"secondary"}
                          fontWeight={"bold"}
                          flexDirection={"column"}
                          width={"100%"}
                          marginInlineStart={0}
                          sx={{
                            "& > *:not(style) ~ *:not(style)": {
                              marginInlineStart: "0 !important",
                            },
                          }}
                        >
                          <Button
                            as={"a"}
                            href="#ERPCalipso"
                            justifyContent={"flex-start"}
                            marginInlineStart={0}
                            width={"100%"}
                            textAlign={"left"}
                            variant={"ghost"}
                            transition={"all ease 0.2s"}
                            _hover={{
                              color: "secondary",
                              bgColor: "#403c9021",
                            }}
                          >
                            ERP Calipso
                          </Button>
                          <Button
                            as={"a"}
                            href="#SistemaMES"
                            justifyContent={"flex-start"}
                            marginInlineStart={0}
                            width={"100%"}
                            textAlign={"left"}
                            variant={"ghost"}
                            transition={"all ease 0.2s"}
                            _hover={{
                              color: "secondary",
                              bgColor: "#403c9021",
                            }}
                          >
                            Sistema MES
                          </Button>
                          <Button
                            as={"a"}
                            href="#SoftwareMedida"
                            justifyContent={"flex-start"}
                            marginInlineStart={0}
                            width={"100%"}
                            textAlign={"left"}
                            variant={"ghost"}
                            transition={"all ease 0.2s"}
                            _hover={{
                              color: "secondary",
                              bgColor: "#403c9021",
                            }}
                          >
                            Software a medida
                          </Button>
                        </ButtonGroup>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Link href="#clientes" variant={"link"}>
                    Clientes
                  </Link>
                  <Link href="#contacto" variant={"link"}>
                    Contacto
                  </Link>
                </ButtonGroup>
              ) : (
                <>
                  <Button
                    color={"primary"}
                    onClick={onOpen}
                    _hover={{
                      color: "secondary",
                      bgColor: "#403c9021",
                    }}
                  >
                    <FaBars />
                  </Button>

                  <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent bg={"tertiary"}>
                      <DrawerCloseButton />
                      <DrawerHeader>
                        <Box ml={4}>Rafaela Software</Box>
                      </DrawerHeader>

                      <DrawerBody>
                        <ButtonGroup
                          gap={2}
                          color={"secondary"}
                          fontWeight={"bold"}
                          flexDirection={"column"}
                          width={"100%"}
                          marginInlineStart={0}
                          sx={{
                            "& > *:not(style) ~ *:not(style)": {
                              marginInlineStart: "0 !important",
                            },
                          }}
                        >
                          <Button
                            as={"a"}
                            href="#inicio"
                            justifyContent={"flex-start"}
                            marginInlineStart={0}
                            width={"100%"}
                            textAlign={"left"}
                            variant={"ghost"}
                            transition={"all ease 0.2s"}
                            _hover={{
                              color: "secondary",
                              bgColor: "#403c9021",
                            }}
                          >
                            Inicio
                          </Button>
                          <Button
                            as={"a"}
                            href="#nosotros"
                            justifyContent={"flex-start"}
                            marginInlineStart={0}
                            width={"100%"}
                            textAlign={"left"}
                            variant={"ghost"}
                            transition={"all ease 0.2s"}
                            _hover={{
                              color: "secondary",
                              bgColor: "#403c9021",
                            }}
                          >
                            Sobre Nosotros
                          </Button>
                          <Button
                            onClick={onToggleCollapse}
                            marginInlineStart={0}
                            width={"100%"}
                            textAlign={"left"}
                            variant={"ghost"}
                            transition={"all ease 0.2s"}
                            _hover={{
                              color: "secondary",
                              bgColor: "#403c9021",
                            }}
                            justifyContent={"space-between"}
                            role="groupServicio"
                          >
                            Servicios
                            <Box
                              role="groupServicio"
                              transition={"all ease 0.2s"}
                              _groupHover={{
                                transform: "translateX(5px)",
                              }}
                            >
                              <FaAngleDown />
                            </Box>
                          </Button>
                          <Collapse in={isOpenCollapse} animateOpacity>
                            <ButtonGroup
                              pl={4}
                              gap={2}
                              color={"secondary"}
                              fontWeight={"bold"}
                              flexDirection={"column"}
                              width={"100%"}
                              marginInlineStart={0}
                              sx={{
                                "& > *:not(style) ~ *:not(style)": {
                                  marginInlineStart: "0 !important",
                                },
                              }}
                            >
                              <Button
                                as={"a"}
                                href="#ERPCalipso"
                                justifyContent={"flex-start"}
                                marginInlineStart={0}
                                width={"100%"}
                                textAlign={"left"}
                                variant={"ghost"}
                                transition={"all ease 0.2s"}
                                _hover={{
                                  color: "secondary",
                                  bgColor: "#403c9021",
                                }}
                              >
                                ERP Calipso
                              </Button>
                              <Button
                                as={"a"}
                                href="#SistemaMES"
                                justifyContent={"flex-start"}
                                marginInlineStart={0}
                                width={"100%"}
                                textAlign={"left"}
                                variant={"ghost"}
                                transition={"all ease 0.2s"}
                                _hover={{
                                  color: "secondary",
                                  bgColor: "#403c9021",
                                }}
                              >
                                Sistema MES
                              </Button>
                              <Button
                                as={"a"}
                                href="#SoftwareMedida"
                                justifyContent={"flex-start"}
                                marginInlineStart={0}
                                width={"100%"}
                                textAlign={"left"}
                                variant={"ghost"}
                                transition={"all ease 0.2s"}
                                _hover={{
                                  color: "secondary",
                                  bgColor: "#403c9021",
                                }}
                              >
                                Software a medida
                              </Button>
                            </ButtonGroup>
                          </Collapse>
                          <Button
                            as={"a"}
                            href="#clientes"
                            justifyContent={"flex-start"}
                            marginInlineStart={0}
                            width={"100%"}
                            textAlign={"left"}
                            variant={"ghost"}
                            transition={"all ease 0.2s"}
                            _hover={{
                              color: "secondary",
                              bgColor: "#403c9021",
                            }}
                          >
                            Clientes
                          </Button>
                          <Button
                            as={"a"}
                            href="#contacto"
                            justifyContent={"flex-start"}
                            marginInlineStart={0}
                            width={"100%"}
                            textAlign={"left"}
                            variant={"ghost"}
                            transition={"all ease 0.2s"}
                            _hover={{
                              color: "secondary",
                              bgColor: "#403c9021",
                            }}
                          >
                            Contacto
                          </Button>
                        </ButtonGroup>
                      </DrawerBody>
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
