import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Logo({ width = 160, height = 100 }) {
  return (
    <Box width={{ base: "150px", md: width }}>
      <a
        href={"#"}
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <Image
          src={"/images/logo.svg"}
          alt={"Logo de Rafaela Software - S.A"}
          width={0}
          height={0}
          sizes="100%"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </a>
    </Box>
  );
}
