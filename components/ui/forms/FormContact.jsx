"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { BsPerson, BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function FormContact() {
  const sendEmail = async (values) => {
    try {
      const body = {
        from: values.email,
        text: `Nombre: ${values.name}\nCelular: ${values.phone}\nConsulta: ${values.message}`,
        html: "<strong>and some html</strong>",
      };

      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      onSubmit={(values, actions) => {
        sendEmail(values);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Box p={8}>
            <Heading
              as={"h3"}
              textAlign={"left"}
              mb={4}
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
            >
              Envianos tus consultas:
            </Heading>
            <VStack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Nombre</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement pointerEvents="none">
                    <BsPerson color="gray.800" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    size="md"
                    pl={10}
                    placeholder="Tu nombre"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>E-Mail</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement pointerEvents="none">
                    <MdOutlineEmail color="gray.800" />
                  </InputLeftElement>
                  <Input
                    type="email"
                    size="md"
                    pl={10}
                    placeholder="ejemplo@email.com"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel>Celular</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement pointerEvents="none">
                    <BsTelephone color="gray.800" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    size="md"
                    pl={10}
                    placeholder="+54 3492 695991"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Consulta</FormLabel>
                <Textarea
                  borderColor="gray.300"
                  _hover={{
                    borderRadius: "gray.300",
                  }}
                  placeholder="Escribe tu consulta aquí"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
              </FormControl>
              <FormControl id="name" float="right">
                <Button
                  type="submit"
                  variant="solid"
                  bgColor="primary"
                  color="white"
                  _hover={{
                    bgColor: "secondary",
                  }}
                  width={{ base: "full", md: "auto" }}
                >
                  Enviar
                </Button>
              </FormControl>
            </VStack>
          </Box>
        </form>
      )}
    </Formik>
  );
}
