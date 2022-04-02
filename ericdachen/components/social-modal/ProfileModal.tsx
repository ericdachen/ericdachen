import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  ModalCloseButton,
  Modal,
} from "@chakra-ui/react";

export default function SocialProfileSimple() {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <ModalCloseButton marginLeft={"-10px"} marginBottom={"15px"} />
        <Avatar
          size={"xl"}
          src={"headshot.jpg"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Eric Chen
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @ericdachen
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Hi there! My name is Eric 👋
        </Text>
        <Text>
          I'm currently a third-year CS student who loves tennis, fullstack, and
          solving problems!
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #Student
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #Tennis
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #Tech
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={5} paddingLeft="26px">
          <Link href="resume.pdf">
            <Button
              flex={1}
              width={"100px"}
              fontSize={"sm"}
              rounded={"full"}
              bg={useColorModeValue("gray.50", "gray.600")}
            >
              Resume
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/ericdachen/">
            <Button
              flex={1}
              width={"100px"}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              LinkedIn
            </Button>
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}