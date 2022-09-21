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
import ProjectBox from "./pages/showcaseComponents/ProjectBox";
import TechPage from "./pages/TechPage";
import ExpPage from "./pages/ExpPage";
import EntrePage from "./pages/EntrePage";
import CommPage from "./pages/CommunityPage";

function ShowcasePage() {
  const light = "red.300";
  const dark = "blue.300";
  const lightSelected = "red.100";
  const darkSelected = "blue.100";

  const [curButton, setCurButton] = useState(0);
  const [one, setOne] = useState([lightSelected, darkSelected]);
  const [two, setTwo] = useState([light, dark]);
  const [three, setThree] = useState([light, dark]);
  const [four, setFour] = useState([light, dark]);

  useEffect(() => {
    if (curButton === 0) {
      setOne([lightSelected, darkSelected]);
      setTwo([light, dark]);
      setThree([light, dark]);
      setFour([light, dark]);
    } else if (curButton === 1) {
      setOne([light, dark]);
      setTwo([lightSelected, darkSelected]);
      setThree([light, dark]);
      setFour([light, dark]);
    } else if (curButton === 2) {
      setOne([light, dark]);
      setTwo([light, dark]);
      setThree([lightSelected, darkSelected]);
      setFour([light, dark]);
    } else if (curButton === 3) {
      setOne([light, dark]);
      setTwo([light, dark]);
      setThree([light, dark]);
      setFour([lightSelected, darkSelected]);
    }
  }, [curButton]);

  function handleClick(button) {
    if (button === 0) {
      setCurButton(0);
    } else if (button === 1) {
      setCurButton(1);
    } else if (button === 2) {
      setCurButton(2);
    } else if (button === 3) {
      setCurButton(3);
    }
  }

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
            <Button
              _hover={{ background: useColorModeValue("red.100", "blue.100") }}
              _active={{ background: useColorModeValue("red.100", "blue.100") }}
              onClick={() => handleClick(0)}
              bgColor={useColorModeValue(one[0], one[1])}
            >
              Tech
            </Button>
            <Button
              _hover={{ background: useColorModeValue("red.100", "blue.100") }}
              _active={{ background: useColorModeValue("red.100", "blue.100") }}
              onClick={() => handleClick(1)}
              bgColor={useColorModeValue(two[0], two[1])}
            >
              Entrepreneurship
            </Button>
            <Button
              _hover={{ background: useColorModeValue("red.100", "blue.100") }}
              _active={{ background: useColorModeValue("red.100", "blue.100") }}
              onClick={() => handleClick(2)}
              bgColor={useColorModeValue(three[0], three[1])}
            >
              Community
            </Button>
            <Button
              _hover={{ background: useColorModeValue("red.100", "blue.100") }}
              _active={{ background: useColorModeValue("red.100", "blue.100") }}
              onClick={() => handleClick(3)}
              bgColor={useColorModeValue(four[0], four[1])}
            >
              Experience
            </Button>
          </HStack>
          {curButton === 0 ? <TechPage /> : <></>}
          {curButton === 1 ? <EntrePage /> : <></>}
          {curButton === 2 ? <CommPage /> : <></>}
          {curButton === 3 ? <ExpPage /> : <></>}
        </VStack>
      </Box>
    </>
  );
}

export default ShowcasePage;
