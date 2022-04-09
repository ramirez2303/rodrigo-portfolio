import {
  Button,
  Heading,
  Stack,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import React from "react";

import { BsArrowLeftCircle } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiChakraui, SiJavascript } from "react-icons/si";

import ProjectCard from "./ProjectCard/ProjectCard";

import project1 from "../image/e-commerce.jpeg";
import project2 from "../image/rating-app.jpeg";
import project3 from "../image/coming-soon.jpeg";
import { Link } from "react-router-dom";

const SeeMore = () => {
  return (
    <Stack alignItems="center" width="100%" height="100%" spacing={16}>
      <Stack paddingY={{ base: "4", sm: "4", md: "4", lg: "0" }}>
        <Button
          leftIcon={<BsArrowLeftCircle />}
          colorScheme={useColorModeValue("blue", "pink")}
          variant={useColorModeValue("solid", "outline")}
          position={{
            base: "initial",
            sm: "initial",
            md: "initial",
            lg: "absolute",
          }}
          left="25px"
          top="12px"
        >
          <Link to="/">Volver</Link>
        </Button>
        <Heading>Proyectos</Heading>
      </Stack>
      <Stack
        as={motion.div}
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        gap={10}
        textAlign="center"
        animate={{ y: [-500, 200, 0], x: 0 }}
        transition={{ duration: 1 }}
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
    </Stack>
  );
};

export default SeeMore;
