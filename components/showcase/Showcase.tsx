import React, { useState, ReactNode, useEffect } from "react";
import {
  SlideFade,
  Fade,
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
  Collapse,
} from "@chakra-ui/react";
import Head from "next/head";
import VisibilitySensor from "react-visibility-sensor";
import ProjectBox from "./pages/showcaseComponents/ProjectBox";
import TechPage from "./pages/TechPage";
import ExpPage from "./pages/ExpPage";
import EntrePage from "./pages/EntrePage";
import CommPage from "./pages/CommunityPage";

function ShowcasePage() {
  const light = "red.100";
  const dark = "purple.200";
  const lightSelected = "red.200";
  const darkSelected = "purple.300";

  const [curButton, setCurButton] = useState(0);
  const [one, setOne] = useState([lightSelected, darkSelected]);
  const [two, setTwo] = useState([light, dark]);
  const [three, setThree] = useState([light, dark]);
  const [four, setFour] = useState([light, dark]);
  const [visibility, setVisibility] = useState(0);

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
    <VisibilitySensor
      onChange={(isVisible) => {
        setVisibility(1);
      }}
    >
      <a id="Showcase" className="showCase">
        {/* <SlideFade in={visibility === 1} offsetY="100px"> */}
        <Box
          minH={"100vh"}
          minW={"100vw"}
          bg={useColorModeValue("white", "gray.700")}
        >
          <VStack spacing={"-0vw"}>
            <Text
              fontSize={"8vw"}
              color={useColorModeValue("red.200", "purple.200")}
            >
              Showcase
            </Text>
            <Box
              height={"0.5vw"}
              width={"8vw"}
              bg={useColorModeValue("red.200", "purple.200")}
            />
            <br></br>
            <Center>
            <HStack spacing={3} wrap="wrap">
              <Button
                _hover={{
                  background: useColorModeValue("red.200", "purple.300"),
                }}
                _active={{
                  background: useColorModeValue("red.200", "purple.200"),
                }}
                onClick={() => handleClick(0)}
                bgColor={useColorModeValue(one[0], one[1])}
                style={{
                  marginTop: "0.5em",
                  marginBottom:"0.5em",
                  marginLeft: "0.5em", 
                  marginRight: "0.5em",
                }}
              >
                Internships
              </Button>
              <Button
                _hover={{
                  background: useColorModeValue("red.200", "purple.300"),
                }}
                _active={{
                  background: useColorModeValue("red.200", "purple.300"),
                }}
                onClick={() => handleClick(2)}
                bgColor={useColorModeValue(three[0], three[1])}
                style={{
                  marginTop: "0.5em",
                  marginBottom:"0.5em",
                  marginLeft: "0.5em", 
                  marginRight: "0.5em",
                }}
              >
                Community
              </Button>
              <Button
                _hover={{
                  background: useColorModeValue("red.200", "purple.300"),
                }}
                _active={{
                  background: useColorModeValue("red.200", "purple.300"),
                }}
                onClick={() => handleClick(1)}
                bgColor={useColorModeValue(two[0], two[1])}
                style={{
                  marginTop: "0.5em",
                  marginBottom:"0.5em",
                  marginLeft: "0.5em", 
                  marginRight: "0.5em",
                }}
              >
                Entrepreneurship
              </Button>
              <Button
                _hover={{
                  background: useColorModeValue("red.200", "purple.300"),
                }}
                _active={{
                  background: useColorModeValue("red.200", "purple.300"),
                }}
                onClick={() => handleClick(3)}
                bgColor={useColorModeValue(four[0], four[1])}
                style={{
                  marginTop: "0.5em",
                  marginBottom:"0.5em",
                  marginLeft: "0.5em", 
                  marginRight: "0.5em",
                }}
              >
                Projects
              </Button>
            </HStack>
            </Center>
            {curButton === 0 ? (
              <SlideFade in={curButton === 0} offsetY="20px">
                <TechPage />
                <EntrePage display="none" />
                <CommPage display="none" />
                <ExpPage display="none" />
              </SlideFade>
            ) : (
              <></>
            )}
            {curButton === 1 ? (
              <SlideFade in={curButton === 1} offsetY="20px">
                <TechPage display="none" />
                <EntrePage />
                <CommPage display="none" />
                <ExpPage display="none" />
              </SlideFade>
            ) : (
              <></>
            )}
            {curButton === 2 ? (
              <SlideFade in={curButton === 2} offsetY="20px">
                <TechPage display="none" />
                <EntrePage display="none" />
                <CommPage />
                <ExpPage display="none" />
              </SlideFade>
            ) : (
              <></>
            )}
            {curButton === 3 ? (
              <SlideFade in={curButton === 3} offsetY="20px">
                <TechPage display="none" />
                <EntrePage display="none" />
                <CommPage display="none" />
                <ExpPage />
              </SlideFade>
            ) : (
              <></>
            )}
          </VStack>
        </Box>
        {/* </SlideFade> */}
      </a>
    </VisibilitySensor>
  );
}

export default ShowcasePage;
