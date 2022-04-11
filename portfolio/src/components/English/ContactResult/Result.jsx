import { Stack, Text } from "@chakra-ui/react";
import React from "react";

function Result({ opacity }) {
  return (
    <Stack maxW="400px">
      <Text opacity={opacity}>Tu email se envió correctamente, pronto me contactare con vos</Text>
    </Stack>
  );
}

export default Result;
