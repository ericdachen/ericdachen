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

  console.log(props)
  function openProject() {}
  return (
    <>
      <Box
        onClick={openProject}
        bg={useColorModeValue("gray.400", "gray.600")}
        zIndex={"0"}
        height={props.height}
        width={props.width}
        rounded="20px"
      >
        <Fade in={isOpen} onHoverStart={onToggle} onHoverEnd={onToggle}>
          <Box
            height={props.height}
            width={props.width}
            rounded="20px"
            position={"absolute"}
            bg={"black"}
            opacity={"0"}
            zIndex={"1"}
            transition={"transform .2s"}
            _hover={{
              opacity: 0.5,
            }}
          >
            <ScaleFade in={isOpen}>
              <Box margin={"2em"}>
              <Center>
                <VStack>
                <Heading color={useColorModeValue("white", "white")}>
                  {props.heading}
                </Heading>
              <Text color={useColorModeValue("white", "white")} zIndex={5}>
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
          objectFit={"cover"}
          src={props.imageLink}
          alt="Image of showcase"
        />
      </Box>
    </>
  );
}

export default ProjectBox;