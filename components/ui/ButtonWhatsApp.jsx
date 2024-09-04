import { NUMBER_WHATAPP } from "@/enums/config";
import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function ButtonWhatsApp() {
  return (
    <Box position={"fixed"} right={"0"} bottom={"40px"}>
      <Link
        href={`https://wa.me/${NUMBER_WHATAPP}?text=Hola!%20Estoy%20interesado%20en%20sus%20servicios.`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box maxW={"80px"} maxHeight={"80px"}>
          <Image
            src={"/images/iconos/icono-whatsapp.png"}
            alt="Icono de Whatsapp"
            width={0}
            height={0}
            sizes="100%"
            s
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Link>
    </Box>
  );
}
