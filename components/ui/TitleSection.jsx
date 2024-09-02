import { Center, Heading } from "@chakra-ui/react";

export default function TitleSection({ children }) {
  return (
    <Center bgColor={"tertiary"} height={"100px"}>
      <Heading as={"h2"} fontSize={"3xl"} m={4} color={"primary"}>
        {children}
      </Heading>
    </Center>
  );
}
