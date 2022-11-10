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
  Image,
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
    "a CS and Business student",
    "a rising senior at Waterloo",
    "looking for 2023 internships!",
    "a stock market enthusiast",
    "a Canadian student",
    "a Full-Stack developer",
    "a self-proclaimed designer",
    "a tennis and golf lover",
    "an entrepreneurial spirit",
  ];

  return (
    <a id="Home">
      <Box height="100%" width="100%">
        <Center height="100vh" width="100vw">
          <VStack>
            {useColorModeValue(
              <>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </>,
              <>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </>
            )}
            <HStack spacing={5}>
              <Heading fontSize={"8vw"}>{`Eric`}</Heading>
              <Heading
                fontSize={"8vw"}
                color={useColorModeValue("red.400", "purple.400")}
              >{`Chen`}</Heading>
            </HStack>
            <HStack>
              <div>
                <Text fontSize={"5vw"} paddingRight={"0.5vw"}>
                  {`Hi! I'm`}
                </Text>
              </div>
              <div>
                <Text
                  fontSize={"5vw"}
                  color={useColorModeValue("red.400", "purple.400")}
                >
                  <ReactRotatingText
                    typingInterval={70}
                    pause={2000}
                    items={homeTypingText}
                  />
                </Text>
              </div>
            </HStack>
            <br></br>
            {useColorModeValue(
              <Box boxSize="2xl">
                <Image src="thinking.svg" />
              </Box>,
              <Box
                boxSize="2xl"
                style={{
                  transform: "scaleX(-1)",
                }}
              >
                <Image src="thinking2.svg" />
              </Box>
            )}
          </VStack>
        </Center>
      </Box>
      <ParticlePage />
    </a>
  );
}

export default HomePage;
