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
  Tabs,
  TabList,
  Tab,
  VStack,
  LinkBox,
  SlideFade,
  ScaleFade,
  Fade,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";

function showTab(props) {
    return (
        <Tabs variant="soft-rounded" colorScheme={useColorModeValue("pink", "blue")} >
            <TabList>
                <Tab>

                </Tab>
            </TabList>
        </Tabs>

    )
}