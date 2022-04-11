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
      <Heading marginTop="20px">Projects</Heading>
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
          text={`This is a fake sneakers e-commerce, is only design, non functional`}
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
          text={`This is a rating page, based in the challenge of Frontend Mentor`}
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
          title="Comming soon for a fake e-commerce"
          image={project3}
          alt="Project 3 Image - E-commerce coming soon"
          text={`A page presentation of a fake e-commerce of clothing, based on the challenge of Frontend Mentor`}
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
          <Link to="/SeeMoreEn" onClick={scrollTop}>
            See More
          </Link>
        </Button>
        <GoAboutArrow />
      </Stack>
    </Stack>
  );
};

export default Projects;
