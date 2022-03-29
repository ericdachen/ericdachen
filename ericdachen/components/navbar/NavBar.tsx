import React, { ReactNode } from "react";
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
  MenuDivider,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import ProfileModal from "../social-modal/ProfileModal";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = ["Home", "Showcase", "Contact", "Resume"];
// const finalRef = React.useRef();

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      color: useColorModeValue("red.300", "red.200"),
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
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
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                onClick={onOpen}
                _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
                marginTop={"50px"}
              >
                <Avatar size={"xl"} src={"headshot.JPG"} />
              </MenuButton>{" "}
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
          </Menu>
          <Flex alignItems={"right"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
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
