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

function ExpPage() {
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
                  heading="Hack the North 2021 - Traffa"
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
                  heading="StarterHacks 2019 - Interview Prep App"
                  description="Worked on RBC"
                ></ProjectBox>
                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/headshot.jpeg"
                  height="25em"
                  width="25em"
                  heading="My Website"
                  description="This website was made with love using Chakra UI and Next.js because
                  I'd heard great things about Chakra UI as a framework and wanted to try it instead
                  of the typical Bootstrap and MaterialUI both of which I've used before as well. From ideation
                  to design to execution I had a blast getting to test my design skill and ability (or lack thereof) to group components
                  on Figma in addition to trying out this new framework! I have
                  to say that making this website was actually very fun and I enjoyed it very much!"
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
                  heading="TOHacks 2021 - Shipmates"
                  description="Worked on RBC"
                ></ProjectBox>

                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/small.jpeg"
                  height="20em"
                  width="25em"
                  heading="RBC Battlesnake Competition"
                  description="Worked on RBC"
                ></ProjectBox>
                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/small.jpeg"
                  height="20em"
                  width="25em"
                  heading="Ontario Autism Program"
                  description="Ontario Autism Program"
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

export default ExpPage;
