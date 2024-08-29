import TitleSection from "@/components/ui/TitleSection";
import { Box, Container, HStack, Text } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone, BsGeoAlt } from "react-icons/bs";
import FormContact from "@/components/ui/forms/FormContact";

export default function Contact() {
  return (
    <Box>
      <Container maxWidth={"container.xl"} mb={4}>
        <TitleSection>Contacto</TitleSection>

        <HStack justifyContent={"center"} fontSize={"sm"} mb={4}>
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
        </HStack>

        <Box>
          <FormContact />
        </Box>
      </Container>
    </Box>
  );
}
