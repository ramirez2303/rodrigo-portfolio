import React from "react";

import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaRegMoon } from "react-icons/fa";

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        position="fixed"
        right="25px"
        top="20px"
        icon={colorMode === "light" ? <FaSun /> : <FaRegMoon />}
        isRound="true"
        size="lg"
        onClick={toggleColorMode}
      />
    </>
  );
};

export default ColorMode;
