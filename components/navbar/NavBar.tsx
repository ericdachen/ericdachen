import React, { useState, useEffect, ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
  MenuDivider,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  keyframes,
} from "@chakra-ui/react";
import ProfileModal from "../social-modal/ProfileModal";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = ["Home", "Showcase", "Contact"];
// const finalRef = React.useRef();

const NavLink = ({ children, a }: { children: ReactNode; a: string }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      color: useColorModeValue("red.300", "purple.200"),
    }}
    href={"#" + a}
  >
    {children}
  </Link>
);

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clicked, setClicked] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setClicked(false);
    }, 4000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setClicked(true);
    }, 8000);
  }, []);

  function handleClick() {
    setClicked(true);
    onOpen();
  }
  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <>
      <Box
        position={"fixed"}
        bg={useColorModeValue("yellow.50", "gray.700")}
        px={4}
        width={"100vw"}
        zIndex={"100"}
        paddingTop="20px"
        top="-20px"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Modal
            size="sm"
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="scale"
          >
            <ModalOverlay />
            <ModalContent>
              <ProfileModal />
            </ModalContent>
          </Modal>
          <Menu>
            <HStack spacing={8} alignItems={"left"}>
              <Tooltip
                label="Click on me!"
                placement="bottom-end"
                openDelay={2000}
                isOpen={!clicked}
                hasArrow
              >
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  onClick={handleClick}
                  _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
                  _before={{
                    content: "''",
                    position: "absolute",
                    display: "block",
                    width: "300%",
                    height: "300%",
                    boxSizing: "border-box",
                    borderRadius: "50%",
                    bgColor: useColorModeValue("red.300", "purple.200"),
                    animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                  }}
                >
                  <Avatar size={"md"} src={"headshot.jpeg"} />
                </MenuButton>
              </Tooltip>{" "}
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link} a={link}>
                    {link}
                  </NavLink>
                ))}
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: useColorModeValue("red.300", "purple.200"),
                  }}
                  href={"/EricChenResumeWinter2023Dev.pdf"}
                >
                  Resume
                </Link>
              </HStack>
            </HStack>
          </Menu>
          <Flex alignItems={"right"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                onClick={toggleColorMode}
                _hover={{
                  bg: useColorModeValue("yellow.100", "gray.600"),
                }}
                bg={useColorModeValue("yellow.50", "gray.700")}
              >
                {colorMode === "light" ? "🌕" : "☀️"}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default NavBar;
