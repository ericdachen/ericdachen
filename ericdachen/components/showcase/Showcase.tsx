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
  Divider,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Head from "next/head";
import ProjectBox from "./ProjectBox";
import TechPage from "./TechPage";

function ShowcasePage() {
  const [page, setPage] = useState(0);

  function handleClick(button) {}

  return (
    <>
      <Box
        minH={"100vh"}
        minW={"100vw"}
        bg={useColorModeValue("gray.50", "gray.700")}
      >
        <VStack spacing={"-0vw"}>
          <Text
            fontSize={"8vw"}
            color={useColorModeValue("red.300", "orange.200")}
          >
            Showcase
          </Text>
          <Box
            height={"0.5vw"}
            width={"8vw"}
            bg={useColorModeValue("red.300", "orange.200")}
          />
          <br></br>
          <HStack spacing={3}>
            <Button bgColor={useColorModeValue("red.300", "blue.300")}>
              Tech
            </Button>
            <Button bgColor={useColorModeValue("red.300", "blue.300")}>
              Entrepreneurship
            </Button>
            <Button bgColor={useColorModeValue("red.300", "blue.300")}>
              Community
            </Button>
            <Button bgColor={useColorModeValue("red.300", "blue.300")}>
              Experience
            </Button>
          </HStack>
          <TechPage />
        </VStack>
      </Box>
    </>
  );
}

export default ShowcasePage;
