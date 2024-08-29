import { Center, Heading } from "@chakra-ui/react";

export default function TitleSection({ children }) {
  return (
    <Center>
      <Heading as={"h2"} fontSize={"3xl"} m={4}>
        {children}
      </Heading>
    </Center>
  );
}
