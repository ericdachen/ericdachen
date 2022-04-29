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
import ProjectBox from "./ProjectBox";

function ShowcasePage() {
  const [page, setPage] = useState(0);

  return (
    <>
      <Box
        minH={"100vh"}
        minW={"100vw"}
        bg={useColorModeValue("gray.50", "gray.700")}
      >
        <br></br>
        <Center>
          <VStack spacing={"3vw"}>
            <VStack spacing={"-0vw"}>
              <Text
                fontSize={"5vw"}
                color={useColorModeValue("red.300", "orange.200")}
              >
                Showcase
              </Text>
              <Box
                height={"0.5vw"}
                width={"8vw"}
                bg={useColorModeValue("red.300", "orange.200")}
              />
              <br></br>
              <HStack spacing={3}>
                <Button bgColor={useColorModeValue("red.300", "blue.300")}>
                  Tech
                </Button>
                <Button bgColor={useColorModeValue("red.300", "blue.300")}>
                  Entrepreneurship
                </Button>
                <Button bgColor={useColorModeValue("red.300", "blue.300")}>
                  Community
                </Button>
                <Button bgColor={useColorModeValue("red.300", "blue.300")}>
                  Experience
                </Button>
              </HStack>
            </VStack>
            <Wrap justify={"center"} spacing={"3vw"}>
              <WrapItem>
                <ProjectBox
                  boxlink="www.google.com"
                  imagelink="UW.jpeg"
                  height="30em"
                  width="25em"
                  heading="JDCC Laurier"
                  description="Trained for 4 months with the JDCC Laurier team to compete against 10 other universities in a 3 hour business case competition."
                ></ProjectBox>
              </WrapItem>
              <WrapItem>
                <VStack spacing={10}>
                  <ProjectBox
                    boxlink="www.google.com"
                    imagelink="headshot.jpeg"
                    height="15em"
                    width="25em"
                    heading="Carta"
                    description="Worked as an infrastructure engineer for Carta!"
                  ></ProjectBox>

                  <ProjectBox
                    boxlink="www.google.com"
                    imageLink="small.jpeg"
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
      </Box>
    </>
  );
}

export default ShowcasePage;
