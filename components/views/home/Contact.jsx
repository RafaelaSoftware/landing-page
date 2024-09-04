import TitleSection from "@/components/ui/TitleSection";
import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  VStack,
} from "@chakra-ui/react";
import FormContact from "@/components/ui/forms/FormContact";
import Link from "next/link";
import { HEADER_HEIGHT, NUMBER_WHATAPP } from "@/enums/config";
import Image from "next/image";

export default function Contact() {
  return (
    <Box id="contacto" scrollMarginTop={HEADER_HEIGHT}>
      <TitleSection>Contacto</TitleSection>
      <Container maxWidth={"container.xl"} mb={4}>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
          <GridItem>
            <FormContact />
          </GridItem>
          <GridItem bgColor={"primary"}>
            <VStack
              height={{ base: "xs", md: "100%" }}
              color="#6cc06f"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Link
                href={`https://wa.me/${NUMBER_WHATAPP}?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios.`}
                textDecoration={"underline"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Center alignItems={"center"} flexDirection={"column"}>
                  <Box maxW={"200px"} maxHeight={"200px"}>
                    <Image
                      src={"/images/iconos/icono-whatsapp.png"}
                      alt="Icono de Whatsapp"
                      width={0}
                      height={0}
                      sizes="100%"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                  <Heading as={"h4"} color={"white"} textAlign={"center"}>
                    ¡Hablá con nosotros!
                  </Heading>
                </Center>
              </Link>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
