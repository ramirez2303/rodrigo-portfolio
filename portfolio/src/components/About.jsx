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

import avatar2 from "../image/avatar2.jpg";

const About = () => {
  return (
    <Stack id="about" spacing={20} padding={4} alignItems="center">
      <Stack alignItems="center" marginTop={10}>
        <Heading>Sobre Mi</Heading>
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
        <Stack maxW={{base:"100%",sm:"100%",md:"100%",lg:"450px"}} height="100%" justify="space-around">
          <Stack
            direction="row"
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.800", "gray.200")}
              />
            }
          >
            <Text fontWeight="700" padding=" 0 10px 0 0" width="150px">
              Tecnologías y Lenguajes
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
            <Text fontWeight="700" padding=" 0 10px 0 0" width="150px">
              Programación
            </Text>
            <Text
              width="300px"
              fontSize="xs"
              opacity={useColorModeValue("1", "0.9")}
              fontWeight="400"
              padding=" 0 0 0 20px"
            >
              Realice cursos de Udemy de HTML, CSS y Javascript, Responsive
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
            <Text fontWeight="700" padding=" 0 10px 0 0" width="150px">
              Estudio
            </Text>
            <Text
              width="300px"
              fontSize="xs"
              opacity={useColorModeValue("1", "0.9")}
              fontWeight="400"
              padding=" 0 0 0 20px"
            >
              Hice el secundario en una Escuela Técnica, con la especialidad en
              Multimedios, obteniendo conocimientos como, arte, diseño gráfico,
              edición de video, programación básica.
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
            <Text fontWeight="700" padding=" 0 10px 0 0" width="150px">
              Yo
            </Text>
            <Text
              width="300px"
              fontSize="xs"
              opacity={useColorModeValue("1", "0.9")}
              fontWeight="400"
              padding=" 0 0 0 20px"
            >
              Soy Rodrigo Exequiel Ramírez, tengo 20 años y vivo en Balcarce,
              Provincia de Buenos Aires, Argentina.
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
