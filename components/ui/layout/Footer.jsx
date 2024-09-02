import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { BsGeoAlt, BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Logo from "@/components/ui/Logo";
import SocialButton from "../SocialButton";

export default function Footer() {
  return (
    <Box bgColor={"tertiary"} py={2}>
      <Container maxW={"container.xl"}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={{ base: "flex-start", md: "center" }}
          gap={4}
          minHeight={"80px"}
          height={"100%"}
        >
          <HStack>
            <BsGeoAlt />
            <Text>Las Araucarias 1520, Rafaela, Santa Fe, ARG.</Text>
          </HStack>
          <HStack>
            <FaInstagram />
            <Text>@rafaelasoftware</Text>
          </HStack>
          <HStack>
            <MdOutlineEmail />
            <Text>info@rafaelasoftware.com.ar</Text>
          </HStack>
          <HStack>
            <FaWhatsapp />
            <Text>+54 3492 695991</Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
