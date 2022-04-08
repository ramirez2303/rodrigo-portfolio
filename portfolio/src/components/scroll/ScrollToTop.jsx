import { IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <IconButton
      position="fixed"
      right="20px"
      bottom="10px"
      icon={<BiUpArrow />}
      isRound="true"
      size="md"
      onClick={scrollTop}
      opacity={isVisible ? "1" : "0"}
    />
  );
};

export default ScrollToTop;
