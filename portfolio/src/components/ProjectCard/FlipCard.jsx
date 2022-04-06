import { Button, Image, Link, Stack } from "@chakra-ui/react";
import { React, useState } from "react";
import ReactCardFlip from "react-card-flip";

const FlipCard = ({ image, alt }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
      <Stack onMouseEnter={handleHover} width="300px">
        <Link>
          <Image src={image} alt={alt} borderRadius="20px 20px 0 0" />
        </Link>
      </Stack>

      <Stack
        onMouseLeave={handleHover}
        width="300px"
        height="203.172px"
        justifyContent="center"
        alignItems="center"
        borderRadius="25px 25px 0 0"
        bgGradient="linear(to-b,blackAlpha.500, transparent)"
      >
        <Stack width="150px">
          <Button colorScheme="twitter">Ir al sitio</Button>
          <Button colorScheme="facebook">Ir al repositorio</Button>
        </Stack>
      </Stack>
    </ReactCardFlip>
  );
};

export default FlipCard;
