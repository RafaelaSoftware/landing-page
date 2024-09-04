import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { HEADER_HEIGHT, NUMBER_WHATAPP } from "@/enums/config";

export function ServicesArticle({
  id,
  title,
  description,
  subtitle,
  benefits,
  secondarySubtitle = null,
  appsDesigned = null,
  linkLabel = null,
  btnLabel,

  isLeft = true,
}) {
  function CardBenefits({ children }) {
    return (
      <Flex
        position={"relative"}
        minH={"40px"}
        bgColor={"tertiary"}
        pl={4}
        py={1}
        transform={isLeft ? "skew(20deg)" : "skew(-20deg)"}
        alignItems={"center"}
        justifyContent={isLeft ? "flex-end" : "flex-start"}
        mr={4}
      >
        <Text
          textAlign={isLeft ? "right" : "left"}
          transform={isLeft ? "skew(-20deg)" : "skew(20deg)"}
          color={"secondary"}
          fontWeight={"bold"}
          fontSize={{ base: "xs", md: "md" }}
        >
          {children}
        </Text>
        <Box
          width={"20%"}
          bgColor={"tertiary"}
          position={"absolute"}
          right={isLeft && "-10px"}
          left={!isLeft && "-10px"}
          top={0}
          bottom={0}
          zIndex={-1}
          transform={isLeft ? "skew(-20deg)" : "skew(20deg)"}
        ></Box>
      </Flex>
    );
  }
  return (
    <Box
      id={id}
      minHeight={`calc(100vh - ${HEADER_HEIGHT})`}
      scrollMarginTop={HEADER_HEIGHT}
    >
      <Center bgColor={"secondary"} height={"60px"}>
        <Heading
          as={"h3"}
          color={"white"}
          fontSize={{ base: "md", sm: "lg", md: "2xl" }}
        >
          {title}
        </Heading>
      </Center>

      <Container maxW={"container.xl"} py={10}>
        <Grid templateColumns={{ base: "1f", md: "1fr 1fr" }}>
          <GridItem order={{ base: 1, md: isLeft ? 1 : 2 }}>
            <Image
              src="/images/placeholder.png"
              alt="Rafaela Software S.A. - Servicios"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "100%", height: "auto" }}
            />
          </GridItem>
          <GridItem
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            pl={{ base: 0, md: isLeft && 4 }}
            pr={{ base: 0, md: !isLeft && 4 }}
            order={{ base: 2, md: isLeft ? 2 : 1 }}
          >
            <Box
              lineHeight={8}
              textAlign={"justify"}
              fontSize={{ base: "sm", md: "md" }}
            >
              {description}
            </Box>
            <Box>
              <Heading
                as={"h4"}
                fontSize={{ base: "sm", md: "md" }}
                my={2}
                fontWeight={"normal"}
                width={"full"}
                textAlign={isLeft ? "right" : "left"}
              >
                {subtitle}
              </Heading>

              <Flex
                flexDirection={"column"}
                gap={4}
                pl={{ base: 1, md: isLeft && 4 }}
                mr={{ base: 0, md: 0 }}
              >
                {benefits.map((benefit) => (
                  <CardBenefits key={benefit}>{benefit}</CardBenefits>
                ))}
              </Flex>
            </Box>
          </GridItem>
        </Grid>

        <Center mt={10}>
          <Link
            href={`https://wa.me/${NUMBER_WHATAPP}?text=Hola!,${btnLabel}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              bgColor={"#75ba63"}
              color={"white"}
              pl={8}
              position={"relative"}
              _hover={{
                transform: "translateY(-2px)",
              }}
              borderRadius={2}
              fontSize={{ base: "xs", md: "md" }}
              size={{ base: "xs", md: "md" }}
            >
              <Box
                position={"absolute"}
                left={{ base: "-15px", md: "-30px" }}
                transform={{
                  base: "translateX(-20px)",
                  md: "translateX(-20px)",
                }}
                height={{ base: "40px", md: "60px" }}
                width={{ base: "40px", md: "60px" }}
              >
                <Image
                  src="/images/iconos/icono-info.svg"
                  alt="Icono de WhatsApp - Quiero solicitar demo"
                  height={0}
                  width={0}
                  sizes="100%"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              {btnLabel}
            </Button>
          </Link>
        </Center>
      </Container>
    </Box>
  );
}
