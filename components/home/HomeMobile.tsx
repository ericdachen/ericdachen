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
import styles from "../../styles/Home.module.css";

var ReactRotatingText = require("react-rotating-text");

function HomeMobile() {
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
      <br></br>
      <Box height={"100vh"} width={"100vw"}>
        <Center height={"100vh"} width={"100vw"}>
          <VStack>
            <HStack spacing={5}>
              <Heading fontSize={"12vw"}>{`Eric`}</Heading>
              <Heading
                fontSize={"12vw"}
                color={useColorModeValue("red.400", "purple.400")}
              >{`Chen`}</Heading>
            </HStack>
            <HStack>
              <div>
                <Text fontSize={"6vw"} paddingRight={"0.5vw"}>
                  {`Hi! I'm`}
                </Text>
              </div>
              <div>
                <Text
                  fontSize={"6vw"}
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
            <Box>
              {useColorModeValue(
                <Box boxSize="sm" maxHeight="30vh" maxWidth="95vw">
                  <Image src="thinking.svg" />
                </Box>,
                <Box boxSize="sm" maxHeight="40vh" maxWidth="95vw">
                  <Image src="adventure.svg" />
                </Box>
              )}
            </Box>

            {useColorModeValue("#FFFFFF", "#000000") === "#000000" ? (
              <HStack spacing={4}>
                <Link href="https://github.com/ericdachen" isExternal>
                  <Image
                    height="2.1em"
                    width="2.1em"
                    src="github-white.png"
                    alt="Icon"
                  />
                </Link>
                <Link href="mailto:e56chen@uwaterloo.ca" isExternal>
                  <Image
                    height="2.2em"
                    width="2.2em"
                    src="email-white.png"
                    alt="Icon"
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/ericdachen/" isExternal>
                  <Image
                    height="2.1em"
                    width="2.1em"
                    src="linkedin-white.png"
                    alt="Icon"
                  />
                </Link>
              </HStack>
            ) : (
              <HStack spacing={4}>
                <Link href="https://github.com/ericdachen" isExternal>
                  <Image
                    height="2.1em"
                    width="2.1em"
                    src="github-black.png"
                    alt="Icon"
                  />
                </Link>
                <Link href="mailto:e56chen@uwaterloo.ca" isExternal>
                  <Image
                    height="2.2em"
                    width="2.2em"
                    src="email-black.png"
                    alt="Icon"
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/ericdachen/" isExternal>
                  <Image
                    height="2.1em"
                    width="2.1em"
                    src="linkedin-black.png"
                    alt="Icon"
                  />
                </Link>
              </HStack>
            )}
            <Center>
              <Box maxWidth="80vw">
                <Text align="center">
                  Make sure to check out my website on desktop too! 😘
                </Text>
              </Box>
            </Center>

            <a
              href="https://github.com/ericdachen/ericdachen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made with ❤️ with lots of 👨🏻‍💻 and ☕️{" "}
            </a>
          </VStack>
        </Center>
      </Box>
      <ParticlePage />
    </a>
  );
}

export default HomeMobile;
