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
  Image
} from "@chakra-ui/react";
import Head from "next/head";

function ProjectBox(props) {
    function openProject() {

    }
    return (
        <>
        <LinkBox>
        <Box height={"40em"} width={"20em"} onClick={openProject} bg={useColorModeValue("gray.400","gray.600")}>
            <Image src='https://avatars.githubusercontent.com/u/54382303?v=4'/>
        </Box>
        </LinkBox>

        
        </>
    );
}

export default ProjectBox;
