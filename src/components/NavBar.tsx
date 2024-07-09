import { Center, HStack, Image } from "@chakra-ui/react"
import logo from "../assets/game-galaxy-logo.jpg"
import ColorModeSwitch from "./ColorModeSwitch"
import { Link } from "react-router-dom"

const NavBar = () => {
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
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar