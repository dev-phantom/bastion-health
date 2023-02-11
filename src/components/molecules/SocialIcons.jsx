import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import SocialButton from "../atoms/SocialButton";
const SocialIcons = () => {
  return ( 
    <Stack direction={"row"} spacing={3}>
      <SocialButton label={"Twitter"} href={"#"}>
        <FaTwitter />
      </SocialButton>
      <SocialButton label={"YouTube"} href={"#"}>
        <FaYoutube />
      </SocialButton>
      <SocialButton label={"Instagram"} href={"#"}>
        <FaInstagram />
      </SocialButton>
      <SocialButton label={"Linkedin"} href={"#"}>
        <FaLinkedin />
      </SocialButton>
    </Stack>
  );
};
 
export default SocialIcons;