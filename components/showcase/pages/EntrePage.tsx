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

function EntrePage(props) {
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
              <ProjectBox
                boxlink="https://creativeshock.lt/"
                imageLink="/creativeshock.avif"
                align="55% 100%"
                fit="cover"
                height="27em"
                width="25em"
                heading="Creative Shock 2022 2nd Place"
                description="I had the incredible opportunity to attend the final round of the Creative Shock business case competition in Vilnius,
                 Lithuania. I competed in two rounds consisting of a 4 hour case and an 8 hour case aimed at helping social entrepreneurships. Our solution
                 was to help entrepreneurs in Bangladesh by introducing a micro-loan repayment system to help individuals without access to electricity.
                  I’m proud to say that my team placed 2nd among 500+ participants!"
              ></ProjectBox>
            </WrapItem>
            <WrapItem>
              <ProjectBox
                boxlink="https://www.youtube.com/watch?v=HHn2yaMPbYw&ab_channel=HongYiChen"
                imageLink="/microsoftAI.jpeg"
                height="27em"
                width="25em"
                fit="cover"
                heading="Microsoft AI Challenge 1st Place"
                description="I had the opportunity to embark on the Microsoft Agorize Discover AI Upskilling Challenge AI in finance sprint. Together with my partner, we created a business pitch for a conversational-AI system designed to help traders digest all the information from reliable business news sources all with a quick command whether it be through a chat interface or a voice-enabled device (called “BluChip.ai”)! Our team was honoured to have placed first in the competition!"
              ></ProjectBox>
            </WrapItem>
          </Wrap>
          <ProjectBox
            boxlink="https://www.lauriercaseteam.ca/"
            imageLink="/jdcc2.avif"
            fit="cover"
            align="70% 75%"
            height="25em"
            width="90vw"
            heading="Laurier International Business Delegate"
            description="
                  Represented the JDCC Laurier Case Competition team as an International Business Delegate!
                  I analyzed business cases, prepared solutions, and delivered presentations all within the span of 3 hours.
                  This was a year-long training process leading up to a competition against 10 other schools leading to an overall 
                  placement of 2nd place for Laurier as school of the year! We also placed 2nd place for the Academic Cup for our 
                  performance in analyzing sponsors' cases."
          ></ProjectBox>
          <Wrap justify={"center"} spacing={"3vw"}>
            <WrapItem>
              <VStack spacing={10}>
                <ProjectBox
                  boxlink="https://osdu.org/"
                  imageLink="/osdu.jpeg"
                  fit="cover"
                  height="20em"
                  width="25em"
                  heading="OSDU Provincial Finalist"
                  description="I had the opportunity to participate in the Ontario Student Debating Union championship! 
                  I placed in the top 20 category after debating 5 rounds against students from all across Ontario."
                ></ProjectBox>
                <ProjectBox
                  boxlink="https://www.wlu.ca/academics/faculties/lazaridis-school-of-business-and-economics/news/2019/winter/first-year-bba-students-wow-judges-in-10th-annual-pepsico-pitch-competition.html"
                  imageLink="/pitch.jpeg"
                  fit="cover"
                  align="0% 30%"
                  height="20em"
                  width="25em"
                  heading="PepsiCo Pitch Competition"
                  description="Pitched an innovative new venture in a pitch competition sponsored by PepsiCo for 'Novus' one of the world's first recyclable pens. The pen, which would be made from only one type of plastic, could be thrown in recycling bins and easily melted by factories to be re-used in new products."
                ></ProjectBox>
                <ProjectBox
                  boxlink="https://www.wlu.ca/academics/faculties/lazaridis-school-of-business-and-economics/news/2019/fall/bu111-live-case-2019-hp-canada.html"
                  imageLink="/newventure.jpeg"
                  height="25em"
                  width="25em"
                  fit="cover"
                  heading="HP Case Competition"
                  description="Had the opportunity the compete against 750 students in a case competition
                  to guide the direction and future of HP's tech products. In a 2 month long process, I'm happy to 
                  say we placed in the semi-finals for our innovative solution surrounding an app that tracks
                  users' environmental footprint to help customers understand their carbin footprint called 'HP Root'!"
                ></ProjectBox>
              </VStack>
            </WrapItem>
            <WrapItem>
              <VStack spacing={10}>
                <ProjectBox
                  boxlink="https://ashokau.org/changemaker-campus-overview"
                  imageLink="/changemaker.jpeg"
                  fit="cover"
                  height="30em"
                  width="25em"
                  heading="AshokaU Changemaker Innovation Challenge 2nd Place"
                  description="The AshokaU Changemaker Innovation Challenge aims to 'Map the System' and is designed to help 
                  produce high quality, accessible research on critical social and environmental issues in the world. My teammates
                  and I produced an innovative program to help recycle wasted electronics in Canada that are uploaded with educational tools
                  to help children in Ethiopia living in rural areas who don't have access to mainstream education."
                ></ProjectBox>
                <ProjectBox
                  boxlink="https://hosa.org/"
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
              </VStack>
            </WrapItem>
          </Wrap>
          <br></br>
        </VStack>
      </Center>
    </div>
  );
}

export default EntrePage;
