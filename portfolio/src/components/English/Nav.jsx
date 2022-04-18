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

import SpanishButton from "../English/LanguageLinks/SpanishButton";
import EnglishButton from "../English/LanguageLinks/EnglishButton";

import spanish from "../Spanish/image/es.svg";
import english from "../Spanish/image/gb.svg";

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
        <Link href="#home">Home</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#about">About me</Link>
        <Link href="#contact">Contact</Link>q
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
              <SpanishButton spanish={spanish} />
            </MenuItem>
            <MenuItem minH="40px">
              <EnglishButton english={english} />
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Stack>
  );
};

export default Nav;
