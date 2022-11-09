import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar/NavBar";
import HomePage from "../components/home/Home";
import ParticlePage from "../components/home/Particles";
import ShowcasePage from "../components/showcase/Showcase";
import {
  VStack,
  Center,
  Heading,
  Text,
  Fade,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import Footer from "../components/footer/Footer";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import HomeMobile from "../components/home/HomeMobile";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const quotes = [
    '"Last name Ever, first name Greatest"',
    '"Live for today, plan for tomorrow, party tonight"',
    '"I want your hot love and emotion, endlessly"',
    '"One thing I have learned is that I am not the owner of my talent, I am the manager of it."',
    '"Never stop fighting no matter what anyone says, if it’s in your gut, your soul, there’s nothing, no worldly possession that should come between you and your expression."',
    '"You can’t knock on opportunity’s door and not be ready."',
    '"If everything was perfect you would never learn and you would never grow."',
  ];
  const authors = [
    "Drake",
    "Drake",
    "Drake",
    "Madonna",
    "Kanye West",
    "Bruno Mars",
    "Beyoncé",
  ];
  const min = 0;
  const max = quotes.length - 1;
  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    onOpen();
    setTimeout(() => {
      onClose();
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Eric Chen</title>
        <meta
          name="description"
          content="This website belongs to ericdachen!"
        />
        <link rel="icon" href="/e2.png" />
      </Head>
      <div>
        <NavBar></NavBar>
        <Box maxWidth="100vw" padding="0 0">
          <Center>
            <MobileView>
              <div className={styles.container}>
                <HomeMobile />
              </div>
            </MobileView>
          </Center>
        </Box>
      </div>

      <BrowserView>
        <>
          {isOpen && (
            <>
              <Fade in={isOpen} unmountOnExit={true}>
                <Center h="100vh" w="100vw">
                  <VStack>
                    <span className="loader"></span>
                    <Heading maxWidth={"70vw"} size="xl" noOfLines={4}>
                      {quotes[random]}
                    </Heading>
                    <Heading float="right">~ {authors[random]}</Heading>
                  </VStack>
                </Center>
              </Fade>
            </>
          )}

          {!isOpen && (
            <Fade in={!isOpen}>
              <div>
                <div className={styles.container}>
                  <VStack>
                    <HomePage></HomePage>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <ShowcasePage></ShowcasePage>
                  </VStack>
                  <Footer />
                </div>
              </div>
            </Fade>
          )}
        </>
      </BrowserView>
    </>
  );
};

export default Home;
