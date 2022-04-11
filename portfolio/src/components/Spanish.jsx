import React from "react";

import { motion } from "framer-motion";

import { Container, Stack, Box, useColorModeValue } from "@chakra-ui/react";

import ColorMode from "../components/Spanish/ColorMode";
import ScrollToTop from "../components/Spanish/scroll/ScrollToTop";
import LeftMenu from "./Spanish/Menu/LeftMenu";
import Nav from "../components/Spanish/Nav";
import Home from "../components/Spanish/Home";
import Projects from "../components/Spanish/Projects";
import About from "../components/Spanish/About";
import Contact from "../components/Spanish/Contact";
import Footer from "../components/Spanish/Footer";

const Spanish = () => {
  return (
    <Box>
      <Box
        as={motion.div}
        animate={{ y: [-1000, 0], opacity: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1] }}
        bgGradient={useColorModeValue(
          "linear(to-br, blue.100, blackAlpha.200)",
          "linear(to-br, blackAlpha.800, blackAlpha.200)"
        )}
        height="100%"
      >
        <Box width="100%" height="100vh">
          <ColorMode />
          <ScrollToTop />
          <LeftMenu />
          <Container
            maxWidth={{ base: "100%", sm: "100%", md: "100%", lg: "900px" }}
          >
            <Stack spacing={12}>
              <Stack position="sticky">
                <Nav />
              </Stack>
              <Stack>
                <Home />
              </Stack>
            </Stack>
          </Container>
        </Box>
        <Box marginTop="100px" width="100%">
          <Container
            maxWidth={{ base: "100%", sm: "100%", md: "100%", lg: "900px" }}
          >
            <Projects />
          </Container>
        </Box>
      </Box>
      <Box
        bgGradient={useColorModeValue(
          "linear(to-tr, blue.100, blackAlpha.200)",
          "linear(to-tr, blackAlpha.800, blackAlpha.200)"
        )}
        height="100%"
      >
        <Box marginTop="0" width="100%">
          <Container
            maxWidth={{ base: "100%", sm: "100%", md: "100%", lg: "900px" }}
          >
            <About />
          </Container>
        </Box>
        <Box marginTop={4} width="100%">
          <Container
            maxWidth={{ base: "100%", sm: "100%", md: "100%", lg: "950px" }}
          >
            <Stack justifyContent="space-between" paddingY={4}>
              <Contact />
              <Footer />
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Spanish;
