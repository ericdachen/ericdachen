import React, { useState, ReactNode, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Heading,
  HStack,
  Image,
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
import styles from "../../styles/Home.module.css";

function Footer() {
  return (
    <a id="Contact">
      <footer className={styles.footer}>
        <VStack>
          <Heading>Let&#39s keep in touch!</Heading>
          {useColorModeValue("#FFFFFF", "#000000") === "#000000" ? (
            <HStack spacing={4}>
              <Link href="https://github.com/ericdachen" isExternal>
                <Image
                  height="2.1em"
                  width="2.1em"
                  src="github-white.png"
                  alt="Icon"
                />
              </Link>
              <Link href="mailto:e56chen@uwaterloo.ca" isExternal>
                <Image
                  height="2.2em"
                  width="2.2em"
                  src="email-white.png"
                  alt="Icon"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/ericdachen/" isExternal>
                <Image
                  height="2.1em"
                  width="2.1em"
                  src="linkedin-white.png"
                  alt="Icon"
                />
              </Link>
            </HStack>
          ) : (
            <HStack spacing={4}>
              <Link href="https://github.com/ericdachen" isExternal>
                <Image
                  height="2.1em"
                  width="2.1em"
                  src="github-black.png"
                  alt="Icon"
                />
              </Link>
              <Link href="mailto:e56chen@uwaterloo.ca" isExternal>
                <Image
                  height="2.2em"
                  width="2.2em"
                  src="email-black.png"
                  alt="Icon"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/ericdachen/" isExternal>
                <Image
                  height="2.1em"
                  width="2.1em"
                  src="linkedin-black.png"
                  alt="Icon"
                />
              </Link>
            </HStack>
          )}
          <a
            href="https://github.com/ericdachen/ericdachen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with ❤️ with lots of 👨🏻‍💻 and ☕️{" "}
          </a>
        </VStack>
      </footer>
    </a>
  );
}

export default Footer;
