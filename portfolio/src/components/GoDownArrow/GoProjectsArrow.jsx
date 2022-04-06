import { React, useState } from "react";

import { motion } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";
import { Link, Stack } from "@chakra-ui/react";

const GoDownArrow = () => {
  const [goDown, setGoDown] = useState(false);

  const handlerArrow = () => {
    setGoDown(true);
    setTimeout(() => {
      setGoDown(false);
    }, 50);
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      <Link as={motion.a} href="#projects" animate={goDown ? { y: 10 } : { y: 0 } }>
        <IoIosArrowDown
          size="50px"
          onClick={handlerArrow}
        />
      </Link>
    </Stack>
  );
};

export default GoDownArrow;
