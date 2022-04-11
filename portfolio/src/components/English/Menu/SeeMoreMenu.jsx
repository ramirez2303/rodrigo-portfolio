import { Stack } from "@chakra-ui/react";
import React from "react";
import { BsPlusCircle } from "react-icons/bs";

import { Link } from "react-router-dom";

const SeeMoreMenu = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      fontSize="sm"
      fontWeight="400"
      opacity="0.7"
      ml="30px"
    >
      <BsPlusCircle />
      <Link to="/SeeMoreEn" onClick={scrollTop}>
        See More
      </Link>
    </Stack>
  );
};

export default SeeMoreMenu;
