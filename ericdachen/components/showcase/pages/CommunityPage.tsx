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

function CommPage() {
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
                  imageLink="/ht6eric.png"
                  height="35em"
                  width="25em"
                  fit="cover"
                  heading="Hack the 6ix     Co-chair"
                  description="
                      Highlights:
                      1,300+ applications,
                      700+ hackers from 26 different countries,
                      20+ workshops and events,
                      99 projects submitted, &
                      1 unforgettable event!!
    
                      Over the past year, I had the opportunity to serve as a Co-chair of Hack the 6ix and had the change to host Hack the 6ix 2021! I am feeling incredibly proud of both the growth I’ve seen in myself throughout this journey as well the entire Hack the 6ix team!
    
                      Starting out as a business development executive and transitioning into the position of Co-chair of Hack the 6ix was definitely a challenge especially since I was only in my sophomore year of Computer Science and Business Administration at the University of Waterloo , but I’m so thankful for the leadership, organization, and networking skills I’ve developed through this experience!
                      "
                ></ProjectBox>
                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/headshot.jpeg"
                  height="30em"
                  width="25em"
                  heading="Blah"
                  description="Worked on RBC"
                ></ProjectBox>
              </VStack>
            </WrapItem>
            <WrapItem>
              <VStack spacing={10}>
                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/techplus.png"
                  fit="contain"
                  align="25% 50%"
                  height="27em"
                  width="25em"
                  heading="Tech+ UW Logistics Coordinator"
                  description="Tech+ UW's mission is to inspire and cultivate a diverse, inclusive, and equitable tech community where students from all backgrounds are supported and empowered throughout their journey in tech.
                  As a logistics coordinator, I had the opportunity to create a workshop called 'Byte-sized Conference' that aimed to develop 
                  provide introductory workshops for students who were interested in getting into tech no matter their background or foundation. 
                  "
                ></ProjectBox>

                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/tedx.jpeg"
                  height="30em"
                  width="25em"
                  fit="cover"
                  heading="Tedx Event Coordinator"
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

export default CommPage;
