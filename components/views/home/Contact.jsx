import TitleSection from "@/components/ui/TitleSection";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  VStack,
} from "@chakra-ui/react";
import FormContact from "@/components/ui/forms/FormContact";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { NUMBER_WHATAPP } from "@/enums/config";
import Image from "next/image";

export default function Contact() {
  return (
    <Box>
      <TitleSection>Contacto</TitleSection>
      <Container maxWidth={"container.xl"} mb={4}>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
          <GridItem>
            <FormContact />
          </GridItem>
          <GridItem bgColor={"primary"}>
            <Link
              href={`https://wa.me/${NUMBER_WHATAPP}`}
              textDecoration={"underline"}
              isExternal
              target="_blank"
              rel="noopener noreferrer"
            >
              <VStack
                height={"100%"}
                color="#6cc06f"
                justifyContent={"center"}
                alignItems={"center"}
              >
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
                <Heading as={"h4"} color={"white"}>
                  ¡Hablá con nosotros!
                </Heading>
              </VStack>
            </Link>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
