import colors from "@/theme/foundations/colors";
import {
  Button,
  ButtonGroup,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

export default function NavbarDesktop() {
  return (
    <ButtonGroup gap={2} as={"nav"}>
      <Button
        as={"a"}
        href="#"
        variant={"link"}
        color={"secondary"}
        fontWeight={"bold"}
      >
        Inicio
      </Button>
      <Button
        as={"a"}
        href="#nosotros"
        variant={"link"}
        color={"secondary"}
        fontWeight={"bold"}
      >
        Sobre Nosotros
      </Button>
      <Popover trigger="hover" placement="bottom-start">
        <PopoverTrigger>
          <Button
            as={"a"}
            href="#servicios"
            variant={"link"}
            color={"secondary"}
            fontWeight={"bold"}
          >
            <Flex alignItems={"center"} gap={1}>
              Servicios
              <FaAngleDown />
            </Flex>
          </Button>
        </PopoverTrigger>
        <PopoverContent bgColor={"tertiary"} borderColor={"secondary"}>
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
      <Button
        as={"a"}
        href="#clientes"
        variant={"link"}
        color={"secondary"}
        fontWeight={"bold"}
      >
        Clientes
      </Button>
      <Button
        as={"a"}
        href="#contacto"
        variant={"link"}
        color={"secondary"}
        fontWeight={"bold"}
      >
        Contacto
      </Button>
    </ButtonGroup>
  );
}