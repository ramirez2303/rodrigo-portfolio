import { ChatIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Image,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

// import emailjs

import contactImage from "../image/talking-svgrepo-com.svg";

const Contact = () => {
  return (
    <Stack
      id="contact"
      direction="row"
      justify="center"
      alignItems="center"
      height="100vh"
    >
      <Stack>
        <form>
          <FormLabel>Nombre Completo</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<ChatIcon color="gray.300" />}
            />
            <Input type="text" name="fullName" required />
          </InputGroup>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input type="text" name="email" />
          </InputGroup>
          <FormLabel>Numero de teléfono</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Input type="text" name="phone" required />
          </InputGroup>
        </form>
      </Stack>
      <Stack>
        <Image
          src={contactImage}
          alt="Illustrative Image Contact"
          w="200px"
          filter="invert(92%) sepia(93%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%)"
        />
      </Stack>
    </Stack>
  );
};

export default Contact;
