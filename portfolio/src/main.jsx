import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Spanish from "./components/Spanish";
import English from "./components/English";
import SeeMoreEs from "./components/Spanish/SeeMore";
import SeeMoreEn from "./components/English/SeeMore"

import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode="dark" />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/spanish" element={<Spanish />} />
          <Route path="/english" element={<English />} />
          <Route path="/SeeMoreEs" element={<SeeMoreEs />} />
          <Route path="/SeeMoreEn" element={<SeeMoreEn />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
