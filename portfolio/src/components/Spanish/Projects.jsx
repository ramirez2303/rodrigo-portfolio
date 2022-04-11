import {
  Button,
  Heading,
  Stack,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import { BsPlusCircle } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiChakraui, SiJavascript } from "react-icons/si";

import ProjectCard from "./ProjectCard/ProjectCard";
import GoAboutArrow from "../Spanish/GoDownArrow/GoAboutArrow";

import project1 from "../Spanish/image/e-commerce.jpeg";
import project2 from "../Spanish/image/rating-app.jpeg";
import project3 from "../Spanish/image/coming-soon.jpeg";

import { Link } from "react-router-dom";

const Projects = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Stack id="projects" alignItems="center" spacing={16}>
      <Heading marginTop="20px">Proyectos</Heading>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        gap={10}
        textAlign="center"
      >
        <ProjectCard
          title="E-commerce sneakers"
          image={project1}
          alt="Project 1 Image - E-commerce sneakers"
          text={`Esta es una fake e-commerce de zapatillas, es solo diseño no es funcional`}
          deploy="https://ramirez2303.github.io/E-commerce-Design-Practice/"
          repo="https://github.com/ramirez2303/E-commerce-Design-Practice"
          icon={
            <Stack direction="row" spacing={4}>
              <Tooltip hasArrow label="HTML" bg="gray.300" color="black">
                <span>
                  <FaHtml5 size="36px" />
                </span>
              </Tooltip>
              <Tooltip hasArrow label="CSS" bg="gray.300" color="black">
                <span>
                  <FaCss3Alt size="36px" />
                </span>
              </Tooltip>
              <Tooltip hasArrow label="Javascript" bg="gray.300" color="black">
                <span>
                  <SiJavascript size="36px" />
                </span>
              </Tooltip>
            </Stack>
          }
        />
        <ProjectCard
          title="Rating App"
          image={project2}
          alt="Project 2 Image - Ratting App"
          text={`Esta es una pagina de puntuación, basada en el reto de la pagina Frontend Mentor`}
          deploy="https://rating-app-frontend-mentor.vercel.app/"
          repo="https://github.com/ramirez2303/rating-app"
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
          title="Comming soon para pagina de ropa"
          image={project3}
          alt="Project 1 Image - Ratting App"
          text={`Una pagina presentación de un proxima fake e-commerce de ropa, basado en el reto de la pagina Frontend Mentor`}
          deploy="https://ramirez2303.github.io/base-apparel-coming-soon-page-challenge/"
          repo="https://github.com/ramirez2303/base-apparel-coming-soon-page-challenge"
          icon={
            <Stack direction="row" spacing={4} _dark>
              <Tooltip hasArrow label="HTML" bg="gray.300" color="black">
                <span>
                  <FaHtml5 size="36px" />
                </span>
              </Tooltip>
              <Tooltip hasArrow label="CSS" bg="gray.300" color="black">
                <span>
                  <FaCss3Alt size="36px" />
                </span>
              </Tooltip>
              <Tooltip hasArrow label="Javascript" bg="gray.300" color="black">
                <span>
                  <SiJavascript size="36px" />
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
          <Link to="/SeeMoreEs" onClick={scrollTop}>
            Ver Mas
          </Link>
        </Button>
        <GoAboutArrow />
      </Stack>
    </Stack>
  );
};

export default Projects;
