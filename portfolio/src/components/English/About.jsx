import React from "react";

import {
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import GoDownArrow from "./GoDownArrow/GoContactArrow";

import avatar2 from "../Spanish/image/avatar2.jpg";

const About = () => {
  return (
    <Stack id="about" spacing={20} padding={4} alignItems="center">
      <Stack alignItems="center" marginTop={10}>
        <Heading>About Me</Heading>
      </Stack>
      <Stack
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        w={{ base: "100%", sm: "100%", md: "100%", lg: "900px" }}
        height={{ base: "", sm: "", md: "", lg: "400px" }}
        alignItems="center"
        justifyContent="space-between"
        borderRadius="25px 0 0 25px"
        spacing={{ base: "60px" }}
      >
        <Stack
          maxW={{ base: "100%", sm: "100%", md: "100%", lg: "450px" }}
          height="100%"
          justify="space-around"
        >
          <Stack
            direction="row"
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.800", "gray.200")}
              />
            }
          >
            <Text
              fontWeight="700"
              fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "md" }}
              padding=" 0 10px 0 0"
              width="150px"
            >
              Technologies and Languages
            </Text>
            <Text
              width="300px"
              fontSize="xs"
              opacity={useColorModeValue("1", "0.9")}
              fontWeight="400"
              padding=" 0 0 0 20px"
            >
              HTML5, CSS3, Javascript, Sass, Bootstrap, Git, ReactJS, ChakraUI,
              Redux.
            </Text>
          </Stack>
          <Stack
            direction="row"
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.800", "gray.200")}
              />
            }
          >
            <Text
              fontWeight="700"
              fontSize={{ base: "xs", sm: "xs", md: "xssxsm", lg: "md" }}
              padding=" 0 10px 0 0"
              width="150px"
            >
              Programing
            </Text>
            <Text
              width="300px"
              fontSize="xs"
              opacity={useColorModeValue("1", "0.9")}
              fontWeight="400"
              padding=" 0 0 0 20px"
            >
              I made a course in Udemy of HTML, CSS y Javascript, Responsive
              Design en freeCodeCamp.
            </Text>
          </Stack>
          <Stack
            direction="row"
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.800", "gray.200")}
              />
            }
          >
            <Text
              fontWeight="700"
              fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "md" }}
              padding=" 0 10px 0 0"
              width="150px"
            >
              Study
            </Text>
            <Text
              width="300px"
              fontSize="xs"
              opacity={useColorModeValue("1", "0.9")}
              fontWeight="400"
              padding=" 0 0 0 20px"
            >
              I did high school in a Technical School, with a specialty in
              Multimedia, obtaining knowledge such as art, graphic design, video
              editing, basic programming.
            </Text>
          </Stack>
          <Stack
            direction="row"
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.800", "gray.200")}
              />
            }
          >
            <Text
              fontWeight="700"
              fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "md" }}
              padding=" 0 10px 0 0"
              width="150px"
            >
              Me
            </Text>
            <Text
              width="300px"
              fontSize="xs"
              opacity={useColorModeValue("1", "0.9")}
              fontWeight="400"
              padding=" 0 0 0 20px"
            >
              I am Rodrigo Exequiel Ramírez, I am 20 years old and I live in
              Balcarce, Province of Buenos Aires, Argentina.
            </Text>
          </Stack>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Image src={avatar2} width="320px" />
        </Stack>
      </Stack>
      <GoDownArrow />
    </Stack>
  );
};

export default About;
