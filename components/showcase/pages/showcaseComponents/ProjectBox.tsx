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
  LinkBox,
  SlideFade,
  ScaleFade,
  Fade,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";

function ProjectBox(props) {
  const { isOpen, onToggle } = useDisclosure();

  function openProject() {}
  return (
    <>
      <Box
        onClick={openProject}
        bg={useColorModeValue("gray.400", "gray.600")}
        zIndex={"0"}
        height={props.height}
        width={props.width}
        maxWidth="52em"
        minWidth="25em"
        rounded="20px"
      >
        <Fade in={isOpen} onHoverStart={onToggle} onHoverEnd={onToggle}>
          <Box
            height={props.height}
            width={props.width}
            maxWidth="52em"
            minWidth="25em"
            rounded="20px"
            position={"absolute"}
            bg={"black"}
            opacity={"0"}
            zIndex={"1"}
            transition={"transform .2s"}
            _hover={{
              opacity: 0.7,
            }}
          >
            <ScaleFade in={isOpen}>
              <Box margin={"2em"}>
                <Center>
                  <VStack>
                    <Text
                      fontSize={"3xl"}
                      fontWeight={"bold"}
                      color={useColorModeValue("white", "white")}
                      align="center"
                    >
                      {props.heading}
                    </Text>
                    <Text
                      color={useColorModeValue("white", "white")}
                      zIndex={5}
                    >
                      {props.description}
                    </Text>
                  </VStack>
                </Center>
              </Box>
            </ScaleFade>
          </Box>
        </Fade>
        <Image
          rounded="20px"
          height={props.height}
          width={props.width}
          objectFit={props.fit}
          src={props.imageLink}
          alt="Image of showcase"
          align={props.align}
          bgColor={useColorModeValue("white", "white")}
          overflow="auto"
          maxWidth="52em"
          minWidth="25em"
        />
      </Box>
    </>
  );
}

export default ProjectBox;
