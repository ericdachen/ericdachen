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
                  imageLink="/changemaker.jpeg"
                  fit="cover"
                  height="30em"
                  width="25em"
                  heading="AshokaU Changemaker Innovation Challenge 2nd Place"
                  description="Developed"
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
            <WrapItem>
              <VStack spacing={10}>
                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/microsoftAI.jpeg"
                  height="27em"
                  width="25em"
                  fit="cover"
                  heading="Microsoft AI Challenge 1st Place"
                  description="I had the opportunity to embark on the Microsoft Agorize Discover AI Upskilling Challenge AI in finance sprint. Together with my partner, we created a business pitch for a conversational-AI system designed to help traders digest all the information from reliable business news sources all with a quick command whether it be through a chat interface or a voice-enabled device (called “BluChip.ai”)! Our team was honoured to have placed first in the competition!"
                ></ProjectBox>

                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/hosa2.jpeg"
                  height="20em"
                  width="25em"
                  heading="HOSA Biomedical Debate 1st Place"
                  description="Competed in the Biomedical Debate category at the annual
                  Health Occupations Students of America where in particular, we had the opportunity
                  to debate the ethics surrounding the use of opioids in treating patients undergoing chronic pain. Placed 1st place!"
                  fit="cover"
                  align="0% 50%"
                ></ProjectBox>
                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/small.jpeg"
                  height="20em"
                  width="25em"
                  heading="RBC"
                  description="HP Case Competition"
                ></ProjectBox>
                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/small.jpeg"
                  height="20em"
                  width="25em"
                  heading="PepsiCo Pitch Competition"
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
