"use client";
import { Button } from "@chakra-ui/react";

export default function SocialButton({ children, href }) {
  return (
    <Button
      bg={"whiteAlpha.100"}
      p={0}
      borderRadius={"100%"}
      w={"40px"}
      h={"40px"}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "whiteAlpha.400",
      }}
      fontSize={"xl"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Button>
  );
}
