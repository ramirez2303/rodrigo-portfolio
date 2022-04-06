import { React } from "react";

import { Container, Stack, Box, useColorModeValue } from "@chakra-ui/react";

import ColorMode from "./components/ColorMode";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Box
        bgGradient={useColorModeValue(
          "linear(to-br, blue.100, blackAlpha.200)",
          "linear(to-br, blackAlpha.800, blackAlpha.200)"
        )}
      >
        <Box width="100%" height="100vh">
          <ColorMode />
          <ScrollToTop />
          <Container maxWidth="900px">
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
        <Box marginTop="0" height="100vh" width="100%">
          <Container maxWidth="900px">
            <Projects />
          </Container>
        </Box>
      </Box>
      <Box
        bgGradient={useColorModeValue(
          "linear(to-tr, blue.100, blackAlpha.200)",
          "linear(to-tr, blackAlpha.800, blackAlpha.200)"
        )}
      >
        <Box marginTop="0" height="100vh" width="100%">
          <Container maxWidth="900px">
            <About />
          </Container>
        </Box>
        <Box marginTop="0" height="100vh" width="100%">
          <Container maxWidth="950px">
            <Contact />
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default App;
