import { LINK_IG, NUMBER_WHATAPP } from "@/enums/config";
import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Box bgColor={"tertiary"} py={{ base: 6, md: 2 }}>
      <Container maxW={"container.xl"}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={{ base: "flex-start", md: "center" }}
          gap={4}
          minHeight={"80px"}
          height={"100%"}
        >
          <Link
            href={
              "https://www.google.com/maps/place/C.+las+Araucarias+1520,+S2300+Rafaela,+Santa+Fe/data=!4m2!3m1!1s0x95cab02636b6525f:0xc19ba7106f4453ed?sa=X&ved=1t:242&ictx=111"
            }
            target="_blank"
            rel="noopener noreferrer"
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
          </Link>

          <Link
            href={LINK_IG}
            textDecoration={"underline"}
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </Link>

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

          <Link
            href={`https://wa.me/${NUMBER_WHATAPP}`}
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
