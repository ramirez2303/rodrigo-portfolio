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
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";

import React, { useEffect, useState } from "react";

import spanish from "../Menu/MenuAssets/es.svg";
import english from "../Menu/MenuAssets/gb.svg";

const MoreLeftMenu = () => {
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
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
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
          <DrawerHeader>Navegación</DrawerHeader>

          <DrawerBody>
            <Stack spacing={7} marginTop={4}>
              <Text>Proyectos:</Text>
              <Stack direction="column" fontSize="sm" opacity="0.8" spacing={6}>
                <Link href="#project1" w="fit-content">
                  E-commerce sneakers
                </Link>
                <Stack spacing={4}>
                  <Link href="#project2" w="fit-content">
                    Rating App
                  </Link>
                </Stack>
                <Link href="#project3" w="fit-content">
                  Comming soon para pagina de ropa
                </Link>
                <Link href="#project4" w="fit-content">
                  Chat App Ilustración en CSS
                </Link>
                <Link href="#project5" w="fit-content">
                  Huddle Landing Page
                </Link>
                <Link href="#project6" w="fit-content">
                  Suscripción App de música
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
                display={{ base: "flex", sm: "flex", md: "none", lg: "none" }}
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

export default MoreLeftMenu;
