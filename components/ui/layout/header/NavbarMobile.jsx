import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa6";

export default function NavbarMobile({
  isOpen,
  onOpen,
  onClose,
  isOpenCollapse,
  onToggleCollapse,
}) {
  const btnRef = useRef();
  return (
    <>
      <Button
        color={"primary"}
        variant={"ghost"}
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
              as={"nav"}
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
  );
}
