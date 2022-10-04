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

function TechPage(props) {
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
                  boxlink="www.google.com"
                  imageLink="/rbclogo2.jpeg"
                  align="48% 50%"
                  fit="cover"
                  height="45em"
                  width="25em"
                  heading="Royal Bank of Canada Fullstack Developer"
                  description="I had the opportunity to work at RBC as a Full Stack developer intern on the myGPS product launch. I had the opportunity to use a lot of different technologies
                  including Angular 7/11, TypeScript, NodeJS, MongoDB, SQL, GraphQL, Jenkins, & ElasticSearch. MyGPS is an investing tool that investment consultants use to show real-time data
                  visualizations of a client's finances including projections, financial history, and overall portfolio.
                  I also had the opportunity to participate in RBC Battlesnake where I created a snake using TypeScript with A-star algorithm logic to compete in an RBC Battlesnake tournament!
                  
                  Furthermore, I joined the RBC StudentPartners team to coordinate events, opportunities and experiences for RBC students.

                  Finally, I had the chance to be an advocate for students with a 10K Coffees ideation workshop. I presented in a Student Partners x 10K Coffees Team Ideation workshop."
                ></ProjectBox>
                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/questionMark.png"
                  height="25em"
                  width="25em"
                  fit="cover"
                  heading="Could be you?"
                  description="I'm actively looking for an internship for Winter 2023 and Summer 2023! If you are on this page, I'd love to stay in touch with you. All my contact information can be found at the bottom of this page 🤩"
                ></ProjectBox>
              </VStack>
            </WrapItem>
            <WrapItem>
              <VStack spacing={10}>
                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/cartalogo2.jpeg"
                  height="33em"
                  fit="cover"
                  width="25em"
                  heading="Carta Back-end & Infrastructure Engineer"
                  description="Carta is a San Francisco software company that specializes in capitalization table and valuation software.
                  At Carta, I had the opportunity to create and produce end-to-end automated event-tracking JSON files with Apache Airflow, transformation using CircleCI and GitHub API, and loading using AWS Redshift data warehousing and S3 buckets (ETL).
                  Furthermore, I migrated over 10 protobuf messages to enforce event-driven architecture schema guidelines and refactored the organization’s creation of kafka messages to support this schema for 500+ developers.
                  "
                ></ProjectBox>

                <ProjectBox
                  boxlink="www.google.com"
                  imageLink="/ontariologo.png"
                  height="30em"
                  width="25em"
                  fit="contain"
                  heading="Ontario Digital Service Web Developer"
                  description="I designed and developed a secure portal using React.js, Node.js and Firebase to reduce program client time delays by over 50%
                  At the same time, I also developed accessible data visualizations using React.js and Node.js generating over 500,000+ unique page views in less than one month 
                  during the peak of the pandemic.
                  Furthermore, I built a Gitlab CI/CD pipeline to automatically deploy to Firebase and implemented Agile methodology to rapidly iterate the prototype by conducting usability tests with 20+ program stakeholders and clients"
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

export default TechPage;
