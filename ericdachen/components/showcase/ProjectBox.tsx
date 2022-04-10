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
        height={"35em"}
        width={"20em"}
        rounded="20px"
      >
        <Fade in={isOpen} onHoverStart={onToggle} onHoverEnd={onToggle}>
          <Box
            height={"35em"}
            width={"20em"}
            rounded="20px"
            position={"absolute"}
            bg={"black"}
            opacity={"0"}
            zIndex={"1"}
            transition={"transform .2s"}
            _hover={{
              opacity: 0.5,
            }}
          />
        </Fade>
        <Image
          rounded="20px"
          height={"35em"}
          width={"20em"}
          objectFit={"cover"}
          src="small.jpeg"
        />
      </Box>
    </>
  );
}

export default ProjectBox;
