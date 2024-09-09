import { LINK_IG, NUMBER_WHATAPP } from "@/enums/config";
import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      bgColor={"tertiary"}
      py={{ base: 6, md: 2 }}
      as="footer"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <Container maxW={"container.xl"}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={{ base: "flex-start", md: "center" }}
          gap={4}
          minHeight={"80px"}
          height={"100%"}
          as={"nav"}
        >
          <Link
            href={
              "https://www.google.com/maps/place/C.+las+Araucarias+1524,+S2300+Rafaela,+Santa+Fe/@-31.2811672,-61.519767,17z/data=!3m1!4b1!4m5!3m4!1s0x95cab02636b6525f:0x3235dc8b082bd4aa!8m2!3d-31.2811718!4d-61.5171921?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
            }
            target="_blank"
            rel="noopener noreferrer"
            itemProp="address"
          >
            <HStack textAlign={"left"}>
              <Box width={"30px"} height={"30px"}>
                <Image
                  src="/images/iconos/icono-dirreccion.svg"
                  alt="Icono de dirección"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <Flex flexWrap={"wrap"} gap={1}>
                <Text itemProp="streetAddress">Las Araucarias 1524</Text>
                <Text itemProp="addressLocality">Rafaela, </Text>
                <Text itemProp="addressRegion">Santa Fe, </Text>
                <Text itemProp="addressCountry">ARG</Text>
              </Flex>
            </HStack>
          </Link>

          <Link
            href={LINK_IG}
            textDecoration={"underline"}
            target="_blank"
            rel="noopener noreferrer"
            itemProp="sameAs"
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

          <HStack
            itemProp="contactPoint"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <Box width={"30px"} height={"30px"}>
              <Image
                src="/images/iconos/icono-mail.svg"
                alt="Icono de correo electrónico"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Text itemProp="email">info@rafaelasoftware.com.ar</Text>
          </HStack>

          <Link
            href={`https://wa.me/${NUMBER_WHATAPP}?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <HStack
              itemProp="telephone"
              itemScope
              itemType="https://schema.org/ContactPoint"
            >
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
