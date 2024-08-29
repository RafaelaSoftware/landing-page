import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  Text,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { BsGeoAlt, BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Logo from "@/components/ui/Logo";
import SocialButton from "../SocialButton";

export default function Footer() {
  return (
    <Box minHeight={"120px"} bgColor={"primary"} py={2}>
      <Container maxW={"container.xl"}>
        <Divider my={2} />

        <Grid templateColumns={"1fr 1fr"}>
          <GridItem>
            <Logo />

            <Text textColor={"white"} fontSize={"sm"}>
              © {new Date().getFullYear()} RafaelaSoftware. Todos los derechos
              reservados.
            </Text>

            <ButtonGroup gap={2} my={2}>
              <SocialButton href={"https://www.instagram.com/rafaelasoftware/"}>
                <FaInstagram />
              </SocialButton>

              <SocialButton href={"https://wa.me/5493492695991"}>
                <FaWhatsapp />
              </SocialButton>
            </ButtonGroup>
          </GridItem>

          <GridItem>
            <VStack
              alignItems={"flex-start"}
              mb={4}
              color={"white"}
              height={"100%"}
            >
              <HStack>
                <MdOutlineEmail />
                <Text>info@rafaelasoftware.com.ar</Text>
              </HStack>
              <HStack>
                <BsTelephone />
                <Text>+54 3492 695991</Text>
              </HStack>

              <HStack>
                <BsGeoAlt />
                <Text>Las Araucarias 1520, Rafaela, Santa Fe, ARG.</Text>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
