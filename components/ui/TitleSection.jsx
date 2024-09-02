import { Center, Heading } from "@chakra-ui/react";

export default function TitleSection({ children }) {
  return (
    <Center bgColor={"primary"} height={"60px"} my={4}>
      <Heading as={"h2"} fontSize={"3xl"} m={4} color={"white"}>
        {children}
      </Heading>
    </Center>
  );
}
