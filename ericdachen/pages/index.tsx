import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar/NavBar";
import HomePage from "../components/home/Home";
import ParticlePage from "../components/home/Particles";

const Home: NextPage = () => {
  return (
    <>
      <NavBar></NavBar>
    <div>
      {/* <ParticlePage></ParticlePage> */}
      <div className={styles.container}>
        <Head>
          <title>Eric Chen 🥳</title>
          <meta
            name="description"
            content="This website belongs to ericdachen!"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
        <HomePage></HomePage>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://github.com/ericdachen/ericdachen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with ❤️ with lots of 👨🏻‍💻 and ☕️{" "}
          </a>
        </footer>
      </div>
    </div>
  </>
  );
};

export default Home;
