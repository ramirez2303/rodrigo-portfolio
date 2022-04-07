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
  useColorModeValue,
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
    <Stack id="contact" justifyContent="space-around" spacing={20}>
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
                    children={<ChatIcon />}
                  />
                  <Input
                    type="text"
                    name="fullName"
                    required
                    border="1px solid"
                    variant={useColorModeValue("filled", "outline")}
                    borderColor={useColorModeValue(
                      "transparent",
                      "whiteAlpha.300"
                    )}
                    _hover={useColorModeValue(
                      { borderColor: "gray.500" },
                      { borderColor: "whiteAlpha.400" }
                    )}
                  />
                </InputGroup>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<EmailIcon />}
                  />
                  <Input
                    type="email"
                    name="email"
                    required
                    border="1px solid"
                    variant={useColorModeValue("filled", "outline")}
                    borderColor={useColorModeValue(
                      "transparent",
                      "whiteAlpha.300"
                    )}
                    _hover={useColorModeValue(
                      { borderColor: "gray.500" },
                      { borderColor: "whiteAlpha.400" }
                    )}
                  />
                </InputGroup>
                <FormLabel>Numero de teléfono</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon />}
                  />
                  <Input
                    type="text"
                    name="phone"
                    required
                    border="1px solid"
                    variant={useColorModeValue("filled", "outline")}
                    borderColor={useColorModeValue(
                      "transparent",
                      "whiteAlpha.300"
                    )}
                    _hover={useColorModeValue(
                      { borderColor: "gray.500" },
                      { borderColor: "whiteAlpha.400" }
                    )}
                  />
                </InputGroup>
                <FormLabel marginY={2}>Mensaje</FormLabel>
                <Textarea
                  name="message"
                  required
                  border="1px solid"
                  variant={useColorModeValue("filled", "outline")}
                  borderColor={useColorModeValue(
                    "transparent",
                    "whiteAlpha.300"
                  )}
                  _hover={useColorModeValue(
                    { borderColor: "gray.500" },
                    { borderColor: "whiteAlpha.400" }
                  )}
                />
              </Stack>
              <Button
                rightIcon={<BiMailSend />}
                colorScheme={useColorModeValue("blue", "pink")}
                variant={useColorModeValue("solid", "outline")}
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
            filter={useColorModeValue(
              "invert(8%) sepia(7%) saturate(3272%) hue-rotate(181deg) brightness(95%) contrast(90%)",
              "invert(92%) sepia(93%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%)"
            )}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contact;
