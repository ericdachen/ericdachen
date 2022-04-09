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
  Divider
} from "@chakra-ui/react";
import Head from "next/head";
import ProjectBox from "./ProjectBox";

function ShowcasePage() {

    return (
        <>
        <Box height={"100vw"} width={"100vw"} bg={useColorModeValue("gray.50", "gray.700")}>
            <br></br>
            <Center>
                <VStack spacing={'3vw'}>
                    <VStack spacing={'-0vw'}>
                    <Text fontSize={"5vw"} color={useColorModeValue("red.300", "red.200")}>Showcase</Text>
                    <Box height={'0.5em'} width={'8em'} bg={useColorModeValue("red.300", "red.200")}/>
                    </VStack>
                <HStack spacing={'5vw'}>
                    <ProjectBox boxlink="www.google.com"></ProjectBox>
                </HStack>
                </VStack>
            </Center>
        </Box>
        
        </>
    );
}

export default ShowcasePage;
