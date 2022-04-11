import {
  Box,
  Button,
  Grid,
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
import ColorMode from "./ColorMode";
import ScrollToTop from "./scroll/ScrollToTop";
import MoreLeftMenu from "./SeeMoreMenu/MoreLeftMenu";

import project1 from "../Spanish/image/e-commerce.jpeg";
import project2 from "../Spanish/image/rating-app.jpeg";
import project3 from "../Spanish/image/coming-soon.jpeg";
import project4 from "../Spanish/image/chat.png";
import project5 from "../Spanish/image/huddle.png";
import project6 from "../Spanish/image/order.png";
import { Link } from "react-router-dom";

const SeeMore = () => {
  return (
    <Box height="100%">
      <Box
        bgGradient={useColorModeValue(
          "linear(to-br, blue.100, blackAlpha.200)",
          "linear(to-br, blackAlpha.800, blackAlpha.200)"
        )}
        height="100%"
      >
        <ColorMode />
        <MoreLeftMenu />
        <ScrollToTop />
        <Stack
          alignItems="center"
          width="100%"
          height="100%"
          spacing={{ base: "0", sm: "0", md: "8", lg: "16" }}
        >
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
          <Grid
            padding={4}
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            as={motion.div}
            alignItems="center"
            justifyContent="space-between"
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
            gap={10}
            textAlign="center"
            animate={{ y: [-500, 200, 0], x: 0 }}
            transition={{ duration: 1 }}
          >
            <ProjectCard
              id="project1"
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
                  <Tooltip
                    hasArrow
                    label="Javascript"
                    bg="gray.300"
                    color="black"
                  >
                    <span>
                      <SiJavascript size="36px" />
                    </span>
                  </Tooltip>
                </Stack>
              }
            />
            <ProjectCard
              id="project2"
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
                  <Tooltip
                    hasArrow
                    label="ChakraUI"
                    bg="gray.300"
                    color="black"
                  >
                    <span>
                      <SiChakraui size="36px" />
                    </span>
                  </Tooltip>
                </Stack>
              }
            />
            <ProjectCard
              id="project3"
              title="Comming soon para pagina de ropa"
              image={project3}
              alt="Project 3 Image - E-commerce coming soon"
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
                  <Tooltip
                    hasArrow
                    label="Javascript"
                    bg="gray.300"
                    color="black"
                  >
                    <span>
                      <SiJavascript size="36px" />
                    </span>
                  </Tooltip>
                </Stack>
              }
            />
            <ProjectCard
              id="project4"
              title="Chat App Ilustración en CSS"
              image={project4}
              alt="Project 4 Image - Chat App"
              text={`Una presentación de una aplicación de chat, la ilustración de la app esta hecha con CSS, basado en el reto de la pagina Frontend Mentor`}
              deploy="https://ramirez2303.github.io/Chat-App-CSS-Illustration-Challenge/"
              repo="https://github.com/ramirez2303/Chat-App-CSS-Illustration-Challenge"
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
                </Stack>
              }
            />
            <ProjectCard
              id="project5"
              title="Huddle Landing Page"
              image={project5}
              alt="Project 5 Image - Huddle Landing Page"
              text={`Una landing page para una red social, basado en el reto de la pagina Frontend Mentor`}
              deploy="https://ramirez2303.github.io/Huddle-Landing-Page-Challenge-/"
              repo="https://github.com/ramirez2303/Huddle-Landing-Page-Challenge-"
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
                </Stack>
              }
            />
            <ProjectCard
              id="project6"
              title="Suscripción App de música"
              image={project6}
              alt="Project 6 Image - Music App"
              text={`Resumen de compra de una app de música, basado en el reto de la pagina Frontend Mentor`}
              deploy="https://ramirez2303.github.io/Order-Cummary-Component-Challenge/"
              repo="https://github.com/ramirez2303/Order-Cummary-Component-Challenge"
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
                </Stack>
              }
            />
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default SeeMore;
