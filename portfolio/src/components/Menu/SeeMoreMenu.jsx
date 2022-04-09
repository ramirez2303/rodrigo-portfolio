import { Stack } from "@chakra-ui/react";
import React from "react";
import { BsPlusCircle } from "react-icons/bs";

import { Link } from "react-router-dom";

const SeeMoreMenu = () => {
  return (
    <Stack direction="row" alignItems="center" fontSize="sm" fontWeight="400" opacity="0.7" ml="30px">
      <BsPlusCircle />
      <Link to="/SeeMore">Ver Mas</Link>
    </Stack>
  );
};

export default SeeMoreMenu;
