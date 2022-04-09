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
  VStack
} from "@chakra-ui/react";
import ParticlePage from "./Particles";
var ReactRotatingText = require("react-rotating-text");



function HomePage() {
  const [curTextIndex, setCurTextIndex] = useState(0);

  const homeTypingText = [
    "a cs and business student",
    "a Full-Stack developer",
    "a stock market enthusiast",
    "a competitive tennis player",
    "a competitive business student"
  ]

  useEffect(() => {
    const updateText = setInterval(() => {
      setCurTextIndex(curTextIndex => (curTextIndex + 1) % 5)
    }, 1000)
    return () => clearInterval(updateText)
  }, []);

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
              <ReactRotatingText items={homeTypingText}/>
            </Text>
          </div>
        </HStack>

        </VStack>

      </Center>

    </Box>
  );
}

export default HomePage;
