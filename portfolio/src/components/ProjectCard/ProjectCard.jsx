import React from "react";

import { Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import FlipCard from "./FlipCard";

const ProjectCard = ({ image, title, text, icon, alt }) => {
  const color = useColorModeValue(
    "linear(to-bl, blue.500, blue.200)",
    "linear(to-br, #7928CA, #FF0080)"
  );

  return (
    <Stack w="100%" h="100%" spacing={0} bgGradient={color} borderRadius="25px">
      <FlipCard image={image} alt={alt} />
      <Stack padding={6} spacing={5}>
        <Stack spacing={3}>
          <Heading fontSize="lg" fontWeight="700">{title}</Heading>
          <Text fontSize="sm" fontWeight="400" opacity="0.8">{text}</Text>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Stack>{icon}</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectCard;
