import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar/NavBar";
import HomePage from "../components/home/Home";
import ParticlePage from "../components/home/Particles";
import ShowcasePage from "../components/showcase/Showcase";
import { VStack, Center, Heading, Text, Fade } from "@chakra-ui/react";
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

  const quotes = [
    "Last name Ever, first name Greatest",
    "Live for today, plan for tomorrow, party tonight",
  ];
  const authors = ["Drake", "Drake"];
  const min = 0;
  const max = quotes.length - 1;
  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
      <NavBar></NavBar>
      <BrowserView>
        {loading ? (
          <>
            <Fade in={loading} unmountOnExit={true}>
              <Center h="100vh" w="100vw">
                <VStack>
                  <span className="loader"></span>
                  <Heading size="xl" noOfLines={1}>
                    {quotes[random]}
                  </Heading>
                  <Heading>~ {authors[random]}</Heading>
                </VStack>
              </Center>
            </Fade>
          </>
        ) : (
          <Fade in={!loading}>
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
      </BrowserView>
      <MobileView>
        <div className={styles.container}>
          <HomeMobile />
        </div>
      </MobileView>
    </>
  );
};

export default Home;
