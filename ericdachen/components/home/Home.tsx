import React, { useState, ReactNode, useEffect } from "react";

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
  VStack,
} from "@chakra-ui/react";
import ParticlePage from "./Particles";
var ReactRotatingText = require("react-rotating-text");

function HomePage() {
  const homeTypingText = [
    "a cs and business student",
    "a debater",
    "a Full-Stack developer",
    "a tennis and golf lover",
    "an entrepreneur at heart",
    "a stock market enthusiast",
  ];

  return (
    <a id="Home">
      <Box height={"100vh"} width={"100vw"}>
        <Center height={"100vh"} width={"100vw"}>
          <VStack>
            <Heading fontSize={"10vw"}>Hi! I&#39m Eric 🤩</Heading>
            <HStack>
              <div>
                <Text fontSize={"5vw"} paddingRight={"0.5vw"}>
                  I&#39m
                </Text>
              </div>
              <div>
                <Text fontSize={"5vw"}>
                  <ReactRotatingText items={homeTypingText} />
                </Text>
              </div>
            </HStack>
          </VStack>
          <ParticlePage />
        </Center>
      </Box>
    </a>
  );
}

export default HomePage;
