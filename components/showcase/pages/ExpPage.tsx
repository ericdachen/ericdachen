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
  useTimeout,
} from "@chakra-ui/react";
import Head from "next/head";
import ProjectBox from "./showcaseComponents/ProjectBox";

function ExpPage(props) {
  const [swapWeb, setSwapWeb] = useState(false);
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
          <ProjectBox
            boxlink="https://www.youtube.com/watch?v=ulJCI6m-lcs&list=LLcnA8PhziLrrPmpcUjqn4_A&ab_channel=EricChen"
            imageLink="/fearless.png"
            height="25em"
            align="0% 10%"
            fit="cover"
            width="90vw"
            heading="UX Laurier Design-a-thon 1st Place - Fearless"
            description="We were asked “How might we design an experience that sparks curiosity, self-reflection, and experimentation to enhance learning and discovery?” Our solution was Fearless, 
            Fearless is a mobile application designed to help you conquer your fears!

            Using Adobe Illustrator, Adobe After Effects, and Figma, we gamified something we like to call “journeys”, which are simulations that help push you outside of your comfort zone. 
            At every single point in your journey you’re going to have personalized reflection prompts to help you better understand your feelings, thoughts, and emotions, as well as encouraging messages along the way.
            Once you complete your final reflection on the simulation, Fearless is going to challenge you to do that journey out in the real world, and monitor your progress as you complete these journeys. I'm super 
            proud to announce that we placed 1st Place and won Best Pitch prize for our solution!"
          ></ProjectBox>
          <Wrap justify={"center"} spacing={"3vw"}>
            <WrapItem>
              <VStack spacing={10}>
                <ProjectBox
                  boxlink="https://devpost.com/software/traffa"
                  imageLink="/traffa.avif"
                  fit="cover"
                  height="27em"
                  width="25em"
                  heading="Hack the North 2020 - Traffa"
                  description="
                  Interactions at in-person coffee chats and networking events are often spontaneous and random, so we wanted to be able to deliver that experience and value with traffa. Our app eradicates the barriers associated with communication and relationship building during a period of social isolation; it provides a simple and accessible way for everyone to spark and foster meaningful connections. Made with Bootstrap, React.js, NodeJS, Vonage API, & Express websockets.
                      "
                ></ProjectBox>
                <ProjectBox
                  boxlink="https://devpost.com/software/cali-bust"
                  imageLink="/interview.png"
                  fit="contain"
                  height="25em"
                  width="25em"
                  heading="StarterHacks 2020 - Interview Prep App"
                  description="Cali || bust takes your resume and using Google Cloud Vision and Google Cloud NLP APIS, develops customized interview questions tailored to you based on your experience and skills! Then based on these interview questions you are able to record yourself answering these questions, allowing you to critique your own interviewing skills. Built with Google Cloud Vision & NLP, and React Native! "
                ></ProjectBox>
              </VStack>
            </WrapItem>
            <WrapItem>
              <VStack spacing={10}>
                <ProjectBox
                  boxlink="https://devpost.com/software/flutter-dcof2b"
                  imageLink="/shipmates.png"
                  fit="contain"
                  align="50% 50%"
                  height="27em"
                  width="25em"
                  heading="TOHacks 2021 - Shipmates"
                  description="The carbon footprint of individually mailed packages from the packaging and environmental cost of individually transporting items is too high. Shipmates is 
                  a mobile app that allows nearby individuals to group online orders into one shipment to reduce their carbon footprint, split the cost of shipping, and save money through bulk purchasing. Made with Flutter, MaterialUI, MobX, Express, Axios, & DataStax and submitted to TOHacks 2021!"
                ></ProjectBox>

                <ProjectBox
                  boxlink="https://github.com/ericdachen/Battlesnake2021-RBC"
                  imageLink="/battlesnake.jpeg"
                  height="25em"
                  width="25em"
                  fit="contain"
                  heading="RBC Battlesnake Competition"
                  description="A Battlesnake is a snake controlled by a web server API I built that responded to a snake board and generated a move in response to the position of other battlesnakes. Battlesnakes move to find food, avoid others, and stay alive! I created a Battlesnake using TypeScript with an A-star pathfinding algorithm logic to compete in an RBC Battlesnake tournament!"
                ></ProjectBox>
              </VStack>
            </WrapItem>
          </Wrap>
          {useColorModeValue(
            <ProjectBox
              boxlink="https://www.ericdachen.com/"
              imageLink="/websiteScreen.png"
              fit="cover"
              align="50% 0%"
              height="25em"
              width="90vw"
              heading="My Website"
              description="This website was made with love using Chakra UI and Next.js because
                    I'd heard great things about Chakra UI as a framework and wanted to try it instead
                    of the typical Bootstrap and MaterialUI both of which I've used before as well. From ideation
                    to design to execution I had a blast getting to test my design skill and ability (or lack thereof) to group components
                    on Figma in addition to trying out this new framework! I have
                    to say that making this website was actually very fun and I enjoyed it very much!"
            ></ProjectBox>,
            <ProjectBox
              boxlink="https://www.ericdachen.com/"
              imageLink="/websiteScreenDark.png"
              fit="cover"
              align="50% 0%"
              height="25em"
              width="90vw"
              heading="My Website"
              description="This website was made with love using Chakra UI and Next.js because
                  I'd heard great things about Chakra UI as a framework and wanted to try it instead
                  of the typical Bootstrap and MaterialUI both of which I've used before as well. From ideation
                  to design to execution I had a blast getting to test my design skill and ability (or lack thereof) to group components
                  on Figma in addition to trying out this new framework! I have
                  to say that making this website was actually very fun and I enjoyed it very much!"
            ></ProjectBox>
          )}

          <ProjectBox
            boxlink="https://ods-autism.web.app/"
            imageLink="/oap.avif"
            height="25em"
            align="50% 0%"
            fit="cover"
            width="90vw"
            heading="Ontario Autism Program"
            description="I developed and coded a high-fidelity functional prototype using React, node.js, and Firebase CLI for the Ontario Autism Program. I developed a web portal that would allow families to easily apply for funding to reduce wait times, increase client communication, and create an overall better user experience. Through this project, I learned how to set up Gitlab CI/CD, Firebase hosting, and cloud firestore functions. Furthermore, I conducted user interviews with stakeholders/clients of OAP to inform the development of the prototype. After developing the web application, I conducted usability testing and iterated upon the app using Agile SDLC methodology.
            Furthermore, I delivered bi-weekly presentations of our work to stakeholders and executives across various government ministries including the Treasury Board Secretariat and Ministry of Government and Consumer Services.             "
          ></ProjectBox>
          <br></br>
        </VStack>
      </Center>
    </div>
  );
}

export default ExpPage;
