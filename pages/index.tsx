import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar/NavBar";
import HomePage from "../components/home/Home";
import ParticlePage from "../components/home/Particles";
import ShowcasePage from "../components/showcase/Showcase";
import { VStack } from "@chakra-ui/react";
import Footer from "../components/footer/Footer";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import HomeMobile from "../components/home/HomeMobile";

const Home: NextPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <BrowserView>
      <div>
        {/* <ParticlePage></ParticlePage> */}
        <div className={styles.container}>
          <Head>
            <title>Eric Chen</title>
            <meta
              name="description"
              content="This website belongs to ericdachen!"
            />
            {/* <link rel="icon" href="/favicon.ico" /> */}
          </Head>
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
      </BrowserView>
      <MobileView>
      <div className={styles.container}>
      <Head>
            <title>Eric Chen</title>
            <meta
              name="description"
              content="This website belongs to ericdachen!"
            />
            {/* <link rel="icon" href="/favicon.ico" /> */}
          </Head>
          <HomeMobile/>
        </div>
      </MobileView>

    </>
  );
};

export default Home;
