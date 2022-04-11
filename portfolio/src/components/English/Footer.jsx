import {
  IconButton,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";

function Footer() {
  return (
    <Stack
      direction={{ base: "column", sm: "row", md: "row", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      borderTop={useColorModeValue("1px solid #555", "1px solid")}
      padding="10px 10px 0"
      maxW="100%"
    >
      <Stack direction="row">
        <Link
          href="https://www.linkedin.com/in/rodrigo-ramirez-b643b9215/"
          target="_blank"
        >
          <IconButton icon={<FaLinkedin />} isRound="true" size="sm" />
        </Link>
        <Link href="https://github.com/ramirez2303" target="_blank">
          <IconButton icon={<FaGithub />} isRound="true" size="sm" />
        </Link>
      </Stack>
      <Stack></Stack>
      <Stack direction="row" fontSize="sm" spacing={6}>
        <Link href="#home">Inicio</Link>
        <Link href="#projects">Proyectos</Link>
        <Link href="#about">Sobre mi</Link>
        <Link href="#contact">Contacto</Link>
      </Stack>
    </Stack>
  );
}

export default Footer;
