import React from "react";

import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaRegMoon } from "react-icons/fa";

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        position="fixed"
        right={{ base: "10px", sm: "10px", md: "10px", lg: "20px" }}
        top="10px"
        icon={colorMode === "light" ? <FaSun /> : <FaRegMoon />}
        isRound="true"
        size="lg"
        onClick={toggleColorMode}
        zIndex="999"
      />
    </>
  );
};

export default ColorMode;
