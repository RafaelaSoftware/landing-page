import { NUMBER_WHATAPP } from "@/enums/config";
import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function ButtonWhatsApp() {
  return (
    <Box
      position={"fixed"}
      right={"0"}
      bottom={"40px"}
      itemScope
      itemType="http://schema.org/ContactPoint"
      itemProp="telephone"
    >
      <Link
        href={`https://wa.me/${NUMBER_WHATAPP}?text=${encodeURIComponent(
          `¡Hola! Bienvenido/a a *Rafaela Software S.A.*\nGracias por contactarnos. Somos especialistas en soluciones tecnológicas y desarrollo de software a medida.\n¿Cómo podemos ayudarte hoy?\n\n1. Consultas sobre servicios\n2. Solicitar una cotización\n3. Agendar una llamada o demo\n\nResponde con el número de la opción que prefieras. ¡Estamos aquí para ayudarte!`
        )}`}
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
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Link>
    </Box>
  );
}
