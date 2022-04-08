import React from "react";

import { Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import FlipCard from "./FlipCard";

const ProjectCard = ({ image, title, text, icon, alt, deploy, repo }) => {
  const color = useColorModeValue(
    "linear(to-bl, blue.500, blue.200)",
    "linear(to-br, #7928CA, #FF0080)"
  );

  return (
    <Stack
      w="300px"
      h="403px"
      spacing={0}
      bgGradient={color}
      borderRadius="25px"
    >
      <FlipCard image={image} alt={alt} deploy={deploy} repo={repo} />
      <Stack height="100%" padding={2} justifyContent="space-evenly" >
        <Stack spacing={3} paddingX="20px">
          <Heading fontSize="md" fontWeight="700">
            {title}
          </Heading>
          <Text oadi fontSize="xs" fontWeight="400" opacity="0.8">
            {text}
          </Text>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Stack>{icon}</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectCard;
