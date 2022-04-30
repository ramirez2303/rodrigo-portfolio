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
import project7 from "../Spanish/image/ecommerceFront.jpeg";
import project8 from "../Spanish/image/advice.jpeg";

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
          id="project7"
          title="E-commerce Product Page"
          image={project7}
          alt="Project 7 Image - E-commerce Product Page"
          text={`Una pagina de un producto de una fake e-commerce, con un carrusel y un carrito funcional, basada en el reto de la pagina Frontend Mentor`}
          deploy="https://fake-e-commerce-product-page.vercel.app/"
          repo="https://github.com/ramirez2303/fake-e-commerce-product-page"
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
          id="project8"
          title="Advice generator - API"
          image={project8}
          alt="Project 8 Image - Advice generator"
          text={`Esta es una pagina con un generador de consejos, conectado a una API proporcionada por Frontend Mentor, basada en el reto de esta misma pagina`}
          deploy="https://advice-generator-frontendmentor-challenge.vercel.app/"
          repo="https://github.com/ramirez2303/advice-generator-frontendmentor-challenge"
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
