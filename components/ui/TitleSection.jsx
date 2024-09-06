import { Center, Heading } from "@chakra-ui/react";

export default function TitleSection({ itemProp = null, children }) {
  return (
    <Center bgColor={"primary"} height={"60px"} my={4}>
      <Heading
        as={"h2"}
        fontSize={"3xl"}
        m={4}
        color={"white"}
        itemProp={itemProp}
      >
        {children}
      </Heading>
    </Center>
  );
}
