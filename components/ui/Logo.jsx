import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Logo({ width = 200, height = 200 }) {
  return (
    <Box>
      <Image
        src={"/images/logo.png"}
        alt="Next.js Logo"
        width={width}
        height={height}
      />
    </Box>
  );
}
