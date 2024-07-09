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
import server from "../services/server-client";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [playPacman, setPlayPacman] = useState(false);
  const [playMario, setPlayMario] = useState(false);

  const displayImage = useBreakpointValue({ base: "none", lg: "block" });

  const registerAnimation = () => {
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

    setTimeout(() => {
      setPlayPacman(false);
      setPlayMario(true);
    }, 3300);
    setTimeout(() => setLoading(true), 5000);
    setTimeout(() => setPlayMario(false), 6000);
    setTimeout(() => (window.location.href = "/"), 7000);
  };

  function validateEmail(email: string) {
    if (email === "") return false;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return;
    } else {
      setEmailError("");
    }

    if (username === "") {
      setUsernameError("Username is required");
      return;
    } else {
      setUsernameError("");
    }

    if (password === "") {
      setPasswordError("Password is required");
      return;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    } else {
      setPasswordError("");
    }

    try {
      const response = await server.post("/users/register", {
        email,
        username,
        password,
      });

      console.log(response);

      if (
        (response.status === 200 || response.status === 201) &&
        response.data.username
      ) {
        localStorage.setItem("username", response.data.username);
        registerAnimation();
      } else {
        setRegisterError(response.data.error || "Failed to register user");
      }
    } catch (error) {
      console.error(error);
      setRegisterError("Failed to register user");
    }
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
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign up for an account</Heading>
          </Stack>
          <Box
            style={{}}
            rounded={"lg"}
            boxShadow={"xl"}
            p={8}
            minHeight={"420px"}
          >
            <Stack spacing={8}>
              <FormControl id="email" isInvalid={emailError.length > 0}>
                <FormLabel paddingLeft={2}>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  colorScheme="accent"
                  borderRadius={24}
                />
                <FormErrorMessage>{emailError}</FormErrorMessage>
              </FormControl>
              <FormControl id="username" isInvalid={usernameError.length > 0}>
                <FormLabel paddingLeft={2}>Username</FormLabel>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  colorScheme="accent"
                  borderRadius={24}
                />
                <FormErrorMessage>{usernameError}</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={passwordError.length > 6}>
                <FormLabel paddingLeft={2}>Password</FormLabel>
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

                <FormErrorMessage>{passwordError}</FormErrorMessage>
              </FormControl>
              <FormErrorMessage>{registerError}</FormErrorMessage>
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
                      Sign Up
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

export default RegisterPage;