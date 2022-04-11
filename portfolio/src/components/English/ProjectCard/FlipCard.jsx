import { Button, Image, Link, Stack } from "@chakra-ui/react";
import { React, useState } from "react";
import ReactCardFlip from "react-card-flip";

const FlipCard = ({ image, alt, deploy, repo }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Stack onMouseEnter={handleHover} width="300px">
        <Link>
          <Image
            src={image}
            alt={alt}
            borderRadius="20px 20px 0 0"
            width="100%"
            height="203.172px"
          />
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
          <Button colorScheme="twitter">
            <Link href={deploy} target="_blank">
              Go to the site
            </Link>
          </Button>

          <Button colorScheme="facebook">
            <Link href={repo} target="_blank">
              Go to repository
            </Link>
          </Button>
        </Stack>
      </Stack>
    </ReactCardFlip>
  );
};

export default FlipCard;
