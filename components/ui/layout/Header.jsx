"use client";
import {
  Box,
  Container,
  Grid,
  GridItem,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "@/components/ui/Logo";
import NavbarDesktop from "./header/NavbarDesktop";
import NavbarMobile from "./header/NavbarMobile";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenCollapse, onToggle: onToggleCollapse } =
    useDisclosure();

  const isDesktop = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box
      as="header"
      bgColor={"tertiary"}
      position={"sticky"}
      top={0}
      right={0}
      zIndex={100}
      bg={"tertiary"}
    >
      <Container maxW={"container.xl"}>
        <Grid templateColumns={"0.5fr 1fr"} height={"100px"}>
          <GridItem
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            height={"100%"}
          >
            <Logo />
          </GridItem>
          <GridItem>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              {isDesktop ? (
                <NavbarDesktop />
              ) : (
                <NavbarMobile
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                  isOpenCollapse={isOpenCollapse}
                  onToggleCollapse={onToggleCollapse}
                />
              )}
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
