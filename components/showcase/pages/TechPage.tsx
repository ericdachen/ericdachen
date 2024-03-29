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
                  boxlink="https://www.datadoghq.com/"
                  imageLink="/datadog.jpeg"
                  height="30em"
                  width="25em"
                  fit="cover"
                  heading="Datadog"
                  description="As a Product Manager, I have a strong track record in driving data-driven product innovations. I conceptualized and led the development of a new feature for supporting Slack Audit Logs in Datadog, successfully launching it into private beta and generating over $300,000 in revenue. My role involved conducting more than 25 user interviews, directly steering the product direction for Datadog’s chat integrations with platforms like Slack, Microsoft Teams, and Google. I also carried out in-depth market research in the B2B observability market, analyzing and presenting key findings to executives, which contributed to a 35% reprioritization of our product roadmap."
                ></ProjectBox>
                <ProjectBox
                  boxlink="https://ca.rbcwealthmanagement.com/web/marita.simbul-lezon/mygps"
                  imageLink="/rbclogo2.jpeg"
                  align="48% 50%"
                  fit="cover"
                  height="45em"
                  width="25em"
                  heading="Royal Bank of Canada SWE Intern"
                  description="I had the opportunity to work at RBC as a Full Stack developer intern on the myGPS product launch. I had the opportunity to use a lot of different technologies
                  including Angular 7/11, TypeScript, NodeJS, MongoDB, SQL, GraphQL, Jenkins, & ElasticSearch. MyGPS is an investing tool that investment consultants use to show real-time data
                  visualizations of a client's finances including projections, financial history, and overall portfolio.
                  I also had the opportunity to participate in RBC Battlesnake where I created a snake using TypeScript with A-star algorithm logic to compete in an RBC Battlesnake tournament!
                  
                  Furthermore, I joined the RBC StudentPartners team to coordinate events, opportunities and experiences for RBC students.

                  Finally, I had the chance to be an advocate for students with a 10K Coffees ideation workshop. I presented in a Student Partners x 10K Coffees Team Ideation workshop."
                ></ProjectBox>

                <ProjectBox
                  boxlink="https://www.linkedin.com/in/ericdachen/"
                  imageLink="/questionMark.png"
                  height="25em"
                  width="25em"
                  fit="cover"
                  heading="Could be you?"
                  description="I'm actively looking for an internship for Summer 2024! If you are on this page, I'd love to stay in touch with you. All my contact information can be found at the bottom of this page 🤩"
                ></ProjectBox>
              </VStack>
            </WrapItem>
            <WrapItem>
              <VStack spacing={10}>
                <ProjectBox
                  boxlink="https://www.wealthsimple.com/en-ca"
                  imageLink="/wealthsimple.jpeg"
                  align="50% 50%"
                  height="30em"
                  width="25em"
                  fit="cover"
                  heading="Wealthsimple SWE Intern"
                  description="I'm currently at Wealthsimple as part of the anti-money laundering and credit card engineering team. Our team is in charge of launching Wealthsimple's newest product, the credit card! We help audit all of the
                  transactions that occur using this card to help identify cases of potential fraud. I also had the opportunity to work on a side project where I conceptualized, designed, and developed CashFx, a new currency conversion tool that enables clients to automatically convert
                  foreign expenses to CAD using Typescript, React-Native hooks, Figma, and Xignite API"
                ></ProjectBox>
                <ProjectBox
                  boxlink="https://carta.com/"
                  imageLink="/cartalogo2.jpeg"
                  height="33em"
                  fit="cover"
                  width="25em"
                  heading="Carta SWE Intern"
                  description="Carta is a San Francisco software company that specializes in capitalization table and valuation software.
                  At Carta, I had the opportunity to create and produce end-to-end automated event-tracking JSON files with Apache Airflow, transformation using CircleCI and GitHub API, and loading using AWS Redshift data warehousing and S3 buckets (ETL).
                  Furthermore, I migrated over 10 protobuf messages to enforce event-driven architecture schema guidelines and refactored the organization’s creation of kafka messages to support this schema for 500+ developers.
                  "
                ></ProjectBox>
                <ProjectBox
                  boxlink="https://www.ontario.ca/page/ontario-digital-service"
                  imageLink="/ontariologo.png"
                  height="30em"
                  width="25em"
                  fit="contain"
                  heading="Ontario Digital Service SWE Intern"
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
