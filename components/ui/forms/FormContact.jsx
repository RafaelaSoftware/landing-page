"use client";
import useCustomToast from "@/hooks/useCustomToast";
import {
  Box,
  Button,
  Flex,
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
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { BsPerson, BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function FormContact() {
  const { showToast } = useCustomToast();
  const [captcha, setCaptcha] = useState(null);
  const sendEmail = async (values) => {
    try {
      const body = {
        to: values.email,
        text: values,
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
      showToast(
        "Consulta enviada!",
        "Nos pondremos en contacto a la brevedad.",
        "success"
      );
    } catch (error) {
      showToast(
        "Error al enviar consulta",
        "Ocurrió un error al enviar la consulta. Por favor, intentá nuevamente.",
        "error"
      );
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        sendEmail(values);
        actions.resetForm();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          itemScope
          itemType="https://schema.org/ContactPoint"
        >
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
                <FormLabel itemProp="name">Nombre</FormLabel>
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
                    itemProp="name"
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel itemProp="email">E-Mail</FormLabel>
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
                    itemProp="email"
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel itemProp="telephone">Celular</FormLabel>
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
                    itemProp="telephone"
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
                  itemProp="message"
                />
              </FormControl>
              <FormControl id="submit" float="right">
                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  alignItems={"center"}
                  gap={4}
                >
                  <Button
                    type="submit"
                    variant="solid"
                    bgColor="primary"
                    color="white"
                    _hover={{
                      bgColor: "secondary",
                    }}
                    width={{ base: "full", md: "auto" }}
                    isDisabled={!captcha}
                  >
                    Enviar
                  </Button>

                  <Box
                    transform={{
                      base: "translateX(-25px)",
                      md: "translateX(0px)",
                    }}
                  >
                    <Box
                      maxW={"200px"}
                      transform={{ base: "scale(0.5)", md: "scale(1)" }}
                      transformOrigin={"center center"}
                    >
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={setCaptcha}
                        size="normal"
                      />
                    </Box>
                  </Box>
                </Flex>
              </FormControl>
            </VStack>
          </Box>
        </form>
      )}
    </Formik>
  );
}
