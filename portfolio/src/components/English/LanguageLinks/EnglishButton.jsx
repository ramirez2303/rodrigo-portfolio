import React from "react";

import { Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EnglishButton = ({ english }) => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link to="/english">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        onClick={scrollTop}
      >
        <Image
          boxSize="2rem"
          borderRadius="full"
          src={english}
          alt="English flag"
          mr="12px"
        />
        <span>English</span>
      </Stack>
    </Link>
  );
};

export default EnglishButton;
