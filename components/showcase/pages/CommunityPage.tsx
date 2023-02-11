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

function CommPage(props) {
  return (
    <div
      style={{
        opacity: props.opacity,
        visibility: props.visibility,
        display: props.display,
      }}
    >
      <br></br>
      <Center>
        <VStack spacing={"3vw"}>
          <Wrap justify={"center"} spacing={"3vw"}>
            <WrapItem>
              <VStack spacing={10}>
                <ProjectBox
                  boxlink="https://hackthe6ix.com/"
                  imageLink="/ht6eric.avif"
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
                  boxlink="https://news.ontario.ca/en/bulletin/42848/applications-for-student-speakup-grants-now-open"
                  imageLink="/speakup.jpeg"
                  height="27em"
                  align="65% 50%"
                  width="25em"
                  heading="SpeakUp Debate Workshops"
                  fit="cover"
                  description="Through the SpeakUp Government Grant funded by the Ontario Ministry of Education by single-handedly organizing and hosting a debate workshop and tournament for middle school students across the Wellington District to encourage them to engage in debating in the future. I secured a $1,250 provincial government grant from SpeakUp Student Voice project and I organized and planned all aspects of the event ranging from the itinerary to the budget expenses. "
                ></ProjectBox>
                <ProjectBox
                  boxlink="https://uwaterloo.ca/math/campus-resources/join-math-faculty-ambassador-team"
                  imageLink="/ambassador.png"
                  height="18em"
                  align="0% 50%"
                  width="25em"
                  heading="University of Waterloo Math Ambassador"
                  fit="cover"
                  description="Hosted hundreds of University of Waterloo potential students to a Fall open house where I helped guide and give
                  advice on applying and promoting the various programs available through the Math Faculty. "
                ></ProjectBox>
              </VStack>
            </WrapItem>
            <WrapItem>
              <VStack spacing={10}>
                <ProjectBox
                  boxlink="https://www.techplusuw.com/"
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
                  boxlink="https://www.ted.com/tedx/events/19579"
                  imageLink="/tedx.jpeg"
                  height="30em"
                  width="25em"
                  fit="cover"
                  heading="Tedx Event Coordinator"
                  description="As the event coordinator for the Tedx Youth at Guelph 2018 event, I spearheaded the operations of the event ranging from the entire design and layout of the event to the promotional items that were distributed including branding and logo design. Tedx Youth at Guelph every year hosts over 100 students from across the Wellington District to listen to inspirational speakers that teach youth in our community how to create meaningful change within their communities. This is an event focused on inspiring and providing tools for youth in our community to make a change."
                ></ProjectBox>
                <ProjectBox
                  boxlink="https://www.gghorg.ca/volunteers/"
                  imageLink="/gghorg.jpeg"
                  height="23em"
                  width="25em"
                  fit="contain"
                  heading="Guelph General Hospital Inpatient Volunteer"
                  description="I volunteered at the Guelph General Hospital for 2 years as an Inpatient volunteer!
                  At the hospital I was tasked with helping to create a friendly environment for patients recovering from surgery or being prepped by offering social support and emotional support resources for these patients."
                ></ProjectBox>
              </VStack>
            </WrapItem>
          </Wrap>
          <br></br>
        </VStack>
      </Center>
    </div>
  );
}

export default CommPage;
