import {
  Box,
  Button,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import React from "react";

import ColorMode from "./Spanish/ColorMode";

import spanish from "./image/es.svg";
import english from "./image/gb.svg";
import { Link } from "react-router-dom";

const Selection = () => {
  return (
    <Box
      as={motion.div}
      animate={{ y: [-1000, 0], opacity: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1] }}
      height="100vh"
      bgGradient={useColorModeValue(
        "linear(to-br, blue.100, blackAlpha.200)",
        "linear(to-br, blackAlpha.800, blackAlpha.200)"
      )}
      amimate
    >
      <ColorMode />
      <Stack
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        spacing={16}
      >
        <Stack>
          <Text fontWeight="500" fontSize="xl">
            Select a language
          </Text>
        </Stack>
        <Stack direction="row" spacing={8}>
          <Link to="/spanish">
            <Button
              w="160px"
              direction="row"
              padding={8}
              variant={useColorModeValue("solid", "outline")}
              colorScheme={useColorModeValue("blue", "pink")}
              justifyContent="center"
              alignItems="center"
              borderRadius="2xl"
            >
              <Image
                boxSize="2rem"
                borderRadius="full"
                src={spanish}
                alt="spanish flag"
                mr="12px"
              />
              <span>Español</span>
            </Button>
          </Link>
          <Link to="/english">
            <Button
              w="160px"
              direction="row"
              padding={8}
              variant={useColorModeValue("solid", "outline")}
              colorScheme={useColorModeValue("blue", "pink")}
              justifyContent="center"
              alignItems="center"
              borderRadius="2xl"
            >
              <Image
                boxSize="2rem"
                borderRadius="full"
                src={english}
                alt="Gb flag"
                mr="12px"
              />
              <span>English</span>
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Selection;
