import {
  Button,
  Heading,
  Stack,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import { BsPlusCircle } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";

import ProjectCard from "./ProjectCard/ProjectCard";
import GoAboutArrow from "../components/GoDownArrow/GoAboutArrow";

import project1 from "../image/rating-app.jpeg";

const Projects = () => {
  return (
    <Stack id="projects" alignItems="center" spacing={16}>
      <Heading marginTop="20px">Proyectos</Heading>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        direction="row"
        gap={10}
        textAlign="center"
      >
        <ProjectCard
          title="Rating App"
          image={project1}
          alt="Project 1 Image - Ratting App"
          text={`Esta es una pagina de puntaje, basada en el reto de la pagina Frontend Mentor`}
          icon={
            <Stack direction="row" spacing={4}>
              <Tooltip hasArrow label="ReactJS" bg="gray.300" color="black">
                <span>
                  <FaReact size="36px" />
                </span>
              </Tooltip>
              <Tooltip hasArrow label="ChakraUI" bg="gray.300" color="black">
                <span>
                  <SiChakraui size="36px" />
                </span>
              </Tooltip>
            </Stack>
          }
        />
        <ProjectCard
          title="Rating App"
          image={project1}
          alt="Project 1 Image - Ratting App"
          text={`Esta es una pagina de puntaje, basada en el reto de la pagina Frontend Mentor`}
          icon={
            <Stack direction="row" spacing={4} _dark>
              <Tooltip hasArrow label="ReactJS" bg="gray.300" color="black">
                <span>
                  <FaReact size="36px" />
                </span>
              </Tooltip>
              <Tooltip hasArrow label="ChakraUI" bg="gray.300" color="black">
                <span>
                  <SiChakraui size="36px" />
                </span>
              </Tooltip>
            </Stack>
          }
        />
        <ProjectCard
          title="Rating App"
          image={project1}
          alt="Project 1 Image - Ratting App"
          text={`Esta es una pagina de puntaje, basada en el reto de la pagina Frontend Mentor`}
          icon={
            <Stack direction="row" spacing={4} _dark>
              <Tooltip hasArrow label="ReactJS" bg="gray.300" color="black">
                <span>
                  <FaReact size="36px" />
                </span>
              </Tooltip>
              <Tooltip hasArrow label="ChakraUI" bg="gray.300" color="black">
                <span>
                  <SiChakraui size="36px" />
                </span>
              </Tooltip>
            </Stack>
          }
        />
      </Stack>
      <Stack spacing={10}>
        <Button
          leftIcon={<BsPlusCircle />}
          colorScheme={useColorModeValue("blue", "pink")}
          variant={useColorModeValue("solid", "outline")}
        >
          Ver Mas
        </Button>
        <GoAboutArrow />
      </Stack>
    </Stack>
  );
};

export default Projects;
