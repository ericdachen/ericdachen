import React, { ReactNode } from "react";
import Typist from 'react-typist';

import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  VStack
} from "@chakra-ui/react";
import ParticlePage from "./Particles";



function HomePage() {
  const homeTypingText = [
    "computer science and business student",
    "a Full-Stack developer",
    "self-proclaimed stock market enthusiast",
    "retired competitive tennis player",
    "new to the twenty-somethings club"
  ]
  return (
    <Box height={"100%"} width={"100%"}>
      <Center>
        <VStack>
        <Heading fontSize={"100px"} >Eric Chen</Heading>
        <HStack>
          <div>
          <Text fontSize={"70px"} paddingRight={"10px"}>I'm</Text>
          </div>
          <div>
            <Text fontSize={"70px"}>
            <Typist>
              <Text fontSize={"70px"}> a Full Stack Developer</Text>
            </Typist>
            </Text>

          </div>
        </HStack>

        </VStack>

      </Center>

    </Box>
  );
}

export default HomePage;
