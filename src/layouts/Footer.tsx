import {
  Box,
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { ReactNode } from "react";
import logo from "../assets/images/logo.webp";
import { SocialButton } from "../components/SocialButton/SocialButton.component";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <HStack>
          {/* <img
            src="https://cdn.prod.website-files.com/654943b76e19af2356069df3/6717ea2bbd3f5c584aaccad8_Logo%20(4).png"
            alt=""
            className="size-[50px] md:size-[50px]"
          /> */}
          <Text fontSize="xl">Tokey</Text>
        </HStack>
        {/* <Text>© 2024 Winstory. All rights reserved</Text> */}
        {/* <Text>Proudly made in 🇫🇷 by Théo Olivieri</Text> */}
        {/* <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"LinkedIn"}
            href={"https://www.linkedin.com/in/theo-olivieri/"}
          >
            <FaLinkedin />
          </SocialButton>
        </Stack> */}
      </Container>
    </Box>
  );
}
