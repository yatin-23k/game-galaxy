import { Center, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/game-galaxy-logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Center bg="black" width="55px" borderRadius={10}>
        <Image src={logo} boxSize="38px" borderRadius={10}/>
      </Center>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
