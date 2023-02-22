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
        w={"auto"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        justifyContent={"center"}
      >
        <ModalCloseButton marginLeft={"-10px"} marginBottom={"15px"} />
        <Avatar
          size={"xl"}
          src={"headshot.jpeg"}
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
        <Text fontWeight={600} color={"gray.500"} mb={2}>
          University of Waterloo
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("black", "white")}
          px={3}
        >
          Hi there! My name is Eric 👋
        </Text>
        <Text>
          {`I'm currently a rising senior student studying Computer Science and Business Administration!
          I'm currently looking for a Summer 2023 and Fall 2023 Internship!`}
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
            #Business
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

        <Stack mt={8} direction={"row"} spacing={5} justifyContent="center">
          <Link href="/EricChenSummer2023Dev.pdf">
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
