import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Logo({ width = 160, height = 100 }) {
  return (
    <Box>
      <Image
        src={"/images/logo.svg"}
        alt={"Logo de Rafaela Software - S.A"}
        width={width}
        height={height}
      />
    </Box>
  );
}
