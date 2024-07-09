import { ButtonGroup, Center, Heading, HStack, Image, Spacer } from "@chakra-ui/react"
import logo from "../assets/game-galaxy-logo.jpg"
import ColorModeSwitch from "./ColorModeSwitch"
import { Link } from "react-router-dom"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import RegisterButton from "./RegisterButton"

const NavBar = () => {
  const username = localStorage.getItem("username");

  return (
    <HStack padding='10px'>
        <Center bg="black" width="55px" borderRadius={10}>
        <Link to="/">
          <Image
            src={logo}
            boxSize="38px"
            borderRadius={10}
            objectFit="cover"
          />
        </Link>
      </Center>
      <Link to="/">
        <Heading size="md" color="white">
          Game Galaxy
        </Heading>
      </Link>

      <Spacer />

      {username ? (
        <LogoutButton />
      ) : (
        <ButtonGroup spacing="4">
          <LoginButton />
          <RegisterButton />
        </ButtonGroup>
      )}
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar