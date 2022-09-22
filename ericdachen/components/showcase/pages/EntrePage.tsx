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
import ProjectBox from "./showcaseComponents/ProjectBox";

function EntrePage() {
  return (
    <>
      <br></br>
      <Center>
        <VStack spacing={"3vw"}>
          <Wrap justify={"center"} spacing={"3vw"}>
            <WrapItem>
              <VStack spacing={10}>
                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/jdcc2.png"
                  fit="cover"
                  align="65% 50%"
                  height="20em"
                  width="25em"
                  heading="JDCC Laurier Delegate"
                  description="
                  Represented the JDCC Laurier Case Competition team as an International Business Delegate!
                  I analyzed business cases, prepared solutions, and delivered presentations all within the span of 3 hours.
                  This was a year-long training process leading up to a competition against 10 other schools leading to an overall 
                  placement of 3rd place for Laurier!"
                ></ProjectBox>
                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/headshot.jpeg"
                  height="30em"
                  width="25em"
                  heading="Carta"
                  description="Worked on RBC"
                ></ProjectBox>
              </VStack>
            </WrapItem>
            <WrapItem>
              <VStack spacing={10}>
                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/headshot.jpeg"
                  height="30em"
                  width="25em"
                  heading="Carta"
                  description="Worked on RBC"
                ></ProjectBox>

                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/small.jpeg"
                  height="20em"
                  width="25em"
                  heading="RBC"
                  description="Worked on RBC"
                ></ProjectBox>
                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/small.jpeg"
                  height="20em"
                  width="25em"
                  heading="RBC"
                  description="Worked on RBC"
                ></ProjectBox>
              </VStack>
            </WrapItem>
          </Wrap>
          <br></br>
        </VStack>
      </Center>
    </>
  );
}

export default EntrePage;
