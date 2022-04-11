import React from "react";

import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";

import {
  Stack,
  Heading,
  Link,
  Image,
  Button,
  Text,
  Flex,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";

import GoProjectsArrow from "../Spanish/GoDownArrow/GoProjectsArrow";

import html5Icon from "../Spanish/image/html5-svgrepo-com.svg";
import cssIcon from "../Spanish/image/css-3-svgrepo-com.svg";
import jsIcon from "../Spanish/image/javascript-svgrepo-com.svg";
import gitIcon from "../Spanish/image/git-svgrepo-com.svg";
import reactIcon from "../Spanish/image/react-svgrepo-com.svg";
import avatar from "../Spanish/image/avatar.png";
import curriculum from "../Spanish/Profile.pdf"

const Home = () => {
  return (
    <Stack id="home">
      <Stack spacing={10}>
        <Flex height="300px" justifyContent="space-around" alignItems="center">
          <Stack spacing={4}>
            <Stack spacing={3}>
              <Heading fontWeight="700">Rodrigo E. Ramirez</Heading>
              <Stack spacing={0}>
                <Text
                  fontWeight="400"
                  color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
                >
                  Frontend Developer
                </Text>
                <Text
                  fontWeight="400"
                  color={useColorModeValue("blackAlpha.700", "whiteAlpha.600")}
                >
                  ReactJS | Javascript | ChakraUI | Git
                </Text>
                <Text
                  fontWeight="400"
                  fontSize="sm"
                  color={useColorModeValue("blackAlpha.700", "whiteAlpha.500")}
                >
                  Desarrollador Web | Balcarce, Argentina
                </Text>
              </Stack>
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
          </Stack>
          <Stack>
            <Image src={avatar} width="230px" borderRadius="full" />
          </Stack>
        </Flex>
        <Stack spacing={12}>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            padding="1.5em 1em"
          >
            <Image src={html5Icon} width="50px" />
            <Image src={cssIcon} width="50px" />
            <Image src={jsIcon} width="50px" />
            <Image src={gitIcon} width="50px" />
            <Image src={reactIcon} width="50px" />
            <SiChakraui size="50px" color="#59c9c8" />
          </Stack>
          <Stack justifyContent="center" alignItems="center">
            <Link href={curriculum} download={curriculum}>
              <Button
                variant={useColorModeValue("solid", "outline")}
                colorScheme={useColorModeValue("blue", "pink")}
                leftIcon={<FaFileDownload />}
                width="180px"
              >
                Descargar CV
              </Button>
            </Link>
          </Stack>
        </Stack>
        <GoProjectsArrow />
      </Stack>
    </Stack>
  );
};

export default Home;
