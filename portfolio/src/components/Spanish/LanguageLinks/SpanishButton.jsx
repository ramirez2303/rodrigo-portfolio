import React from "react";

import { Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ViewIcon } from "@chakra-ui/icons";

const SpanishButton = ({ spanish }) => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link to="/spanish">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        onClick={scrollTop}
      >
        <Image
          boxSize="2rem"
          borderRadius="full"
          src={spanish}
          alt="spanish flag"
          mr="12px"
        />
        <span>
          Español 
        </span>
        <ViewIcon />
      </Stack>
    </Link>
  );
};

export default SpanishButton;
