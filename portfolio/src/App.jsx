import { React } from "react";

import { Container, Stack, Box, useColorModeValue } from "@chakra-ui/react";

import ColorMode from "./components/ColorMode";
import ScrollToTop from "./components/scroll/ScrollToTop";
import LeftMenu from "./components/Menu/LeftMenu";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Box
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
    </div>
  );
}

export default App;
