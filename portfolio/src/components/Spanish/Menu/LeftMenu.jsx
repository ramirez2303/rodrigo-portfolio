import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import SpanishButton from "../LanguageLinks/SpanishButton";
import EnglishButton from "../LanguageLinks/EnglishButton";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";

import React, { useEffect, useState } from "react";

import SeeMoreMenu from "./SeeMoreMenu";

import spanish from "./MenuAssets/es.svg";
import english from "./MenuAssets/gb.svg";

const LeftMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [isVisible, setIsVisible] = useState(false);

  const toggleMenuVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
    onClose();
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleMenuVisibility);

    return () => {
      window.removeEventListener("scroll", toggleMenuVisibility);
    };
  }, []);

  return (
    <>
      <IconButton
        ref={btnRef}
        icon={<HamburgerIcon />}
        onClick={onOpen}
        position="fixed"
        left={{ base: "10px", sm: "10px", md: "10px", lg: "20px" }}
        top="10px"
        opacity={{ base: 1, sm: 1, md: 1, lg: isVisible ? "1" : "0" }}
        size="lg"
        zIndex="999"
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navegacion</DrawerHeader>

          <DrawerBody>
            <Stack spacing={7} marginTop={4}>
              <Stack direction="column" fontSize="md" opacity="0.8" spacing={6}>
                <Link href="#home" w="fit-content">
                  Inicio
                </Link>
                <Stack spacing={4}>
                  <Link href="#projects" w="fit-content">
                    Proyectos:
                  </Link>
                  <Stack>
                    <SeeMoreMenu />
                  </Stack>
                </Stack>
                <Link href="#about" w="fit-content">
                  Sobre mi
                </Link>
                <Link href="#contact" w="fit-content">
                  Contacto
                </Link>
              </Stack>
              <Stack direction="row">
                <Link
                  href="https://www.linkedin.com/in/rodrigo-ramirez-b643b9215/"
                  target="_blank"
                >
                  <IconButton icon={<FaLinkedin />} isRound="true" size="md" />
                </Link>
                <Link href="https://github.com/ramirez2303" target="_blank">
                  <IconButton icon={<FaGithub />} isRound="true" size="md" />
                </Link>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={8}
              >
                <Menu>
                  <MenuButton as={Button} size="sm">
                    Idioma <ChevronDownIcon />
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
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button
              variant="solid"
              colorScheme={useColorModeValue("blue", "pink")}
              mr={3}
              onClick={scrollTop}
            >
              Inicio
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LeftMenu;
