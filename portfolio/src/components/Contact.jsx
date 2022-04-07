import { ChatIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Stack,
  FormLabel,
  Input,
  Image,
  InputGroup,
  InputLeftElement,
  Button,
  Textarea,
  Heading,
} from "@chakra-ui/react";

import { BiMailSend } from "react-icons/bi";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("EumWhZTrl4AIpVIWm");

import contactImage from "../image/talking-svgrepo-com.svg";

import Result from "./ContactResult/Result";

const Contact = () => {
  const form = useRef();

  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ygaatm3",
        "template_648sn3y",
        form.current,
        "EumWhZTrl4AIpVIWm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  return (
    <Stack id="contact" height="100vh" justifyContent="space-around">
      <Stack alignItems="center">
        <Heading>Estemos en contacto</Heading>
      </Stack>
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <Stack width="400px" spacing={6}>
          <form ref={form} onSubmit={sendEmail}>
            <Stack spacing={8}>
              <Stack>
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
                  <Input type="email" name="email" />
                </InputGroup>
                <FormLabel>Numero de teléfono</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                  />
                  <Input type="text" name="phone" required />
                </InputGroup>
                <FormLabel marginY={2}>Mensaje</FormLabel>
                <Textarea name="message" required />
              </Stack>
              <Button
                rightIcon={<BiMailSend />}
                colorScheme="pink"
                variant="outline"
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </form>
          <Stack>
            {result ? <Result opacity="1" /> : <Result opacity="0" />}
          </Stack>
        </Stack>
        <Stack>
          <Image
            src={contactImage}
            alt="Illustrative Image Contact"
            w="300px"
            filter="invert(92%) sepia(93%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%)"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contact;
