import React from "react";

import { FaMountain } from "react-icons/fa";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Stack,
  Link,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";


import spanish from "../image/es.svg";
import english from "../image/gb.svg";

const Nav = () => {
  return (
    <Stack
      paddingY="20px"
      direction="row"
      alignItems="center"
      justifyContent={{
        base: "center",
        sm: "center",
        md: "center",
        lg: "space-between",
      }}
      borderBottom={useColorModeValue("1px solid #000000", "1px solid")}
    >
      <Stack direction="row">
        <Stack>
          <FaMountain size="30px" />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        fontWeight="600"
        spacing="26px"
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
      >
        <Link href="#home">Inicio</Link>
        <Link href="#projects">Proyectos</Link>
        <Link href="#about">Sobre mi</Link>
        <Link href="#contact">Contacto</Link>q
      </Stack>
      <Stack
        display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
        direction="row"
        alignItems="center"
        spacing={4}
        position="absolute"
        left={12}
      >
        <Menu>
          <MenuButton as={Button} size="sm">
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem minH="48px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src={spanish}
                alt="spanish flag"
                mr="12px"
              />
              <span>Español</span>
            </MenuItem>
            <MenuItem minH="40px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src={english}
                alt="Gb flag"
                mr="12px"
              />
              <span>English</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Stack>
  );
};

export default Nav;
