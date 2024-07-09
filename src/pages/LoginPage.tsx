import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  FormErrorMessage,
  Image,
  Flex,
  useBreakpointValue,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import contra from "../assets/contra.gif";
import pacmanPixel from "../assets/anim/pacman-pixel.gif";
import marioJump from "../assets/anim/mario-jump.gif";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [isLoading, setLoading] = useState(false);
  const [playPacman, setPlayPacman] = useState(false);
  const [playMario, setPlayMario] = useState(false);

  const displayImage = useBreakpointValue({ base: "none", lg: "block" });

  const loginAnimation = () => {
    var i = password.length;

    var intervalId = setInterval(function () {
      if (i === 0) {
        clearInterval(intervalId);
        setPlayPacman(true);
      } else {
        const new_pass = password.substring(0, i - 1);
        setPassword(new_pass);
        i--;
      }
    }, 200);

    localStorage.setItem("token", "1234567890");
    setTimeout(() => {
      setPlayPacman(false);
      setPlayMario(true);
    }, 3300);
    setTimeout(() => setLoading(true), 5000);
    setTimeout(() => setPlayMario(false), 6000);
    setTimeout(() => (window.location.href = "/"), 7000);
  };

  const handleSubmit = async () => {
    console.log("submitting");
  };

  return (
    <Flex minH={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Box
        display={displayImage}
        w={["0", "0", "40%", "50%"]}
        overflow={"hidden"}
        // marginY={8}
        paddingX={40}
      >
        <Image
          className="moving-image"
          src={contra}
          alt=""
          height="500px"
          objectFit="contain"
        />
      </Box>
      <Box w={["100%", "100%", "60%", "50%"]}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          {/* <Stack spacing={8} maxW={"lg"} py={12}> */}
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          </Stack>
          <Box
            style={{}}
            rounded={"lg"}
            boxShadow={"xl"}
            p={8}
            minHeight={"420px"}
          >
            {/* <form onSubmit={(e) => handleSubmit(e)}> */}
            <Stack spacing={8}>
              <FormControl id="username" isInvalid={errors.username.length > 0}>
                <FormLabel paddingLeft={2}>Username</FormLabel>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  colorScheme="accent"
                  borderRadius={24}
                />
                <FormErrorMessage>{errors.username}</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password.length > 0}>
                <FormLabel paddingLeft={2}>Password</FormLabel>
                {/* {!playPacman && ( */}
                <InputGroup>
                  <InputLeftElement>
                    <Image
                      className={playPacman ? "moving-pacman" : ""}
                      src={!playMario && !isLoading ? pacmanPixel : ""}
                      alt=""
                      height="36px"
                      objectFit="contain"
                    />
                  </InputLeftElement>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    colorScheme="accent"
                    borderRadius={24}
                    fontSize={40}
                    letterSpacing={12}
                  />
                </InputGroup>

                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              {/* <Stack spacing={20} paddingX={32} border="2px"> */}
              <Box>
                <Stack paddingX={32}>
                  {isLoading ? (
                    <Button
                      isLoading
                      colorScheme="accent"
                      variant="solid"
                      borderRadius={24}
                    ></Button>
                  ) : (
                    <Button
                      colorScheme="blue"
                      onClick={handleSubmit}
                      type="submit"
                      borderRadius={24}
                    >
                      Sign In
                    </Button>
                  )}
                </Stack>
                {playMario && (
                  <Box paddingX={32}>
                    <Image
                      // className="moving-mario"
                      src={marioJump}
                      alt=""
                      // height="500px"
                      objectFit="contain"
                      // border="2px"
                    />
                  </Box>
                )}
              </Box>
            </Stack>
            {/* </form> */}
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default LoginPage;