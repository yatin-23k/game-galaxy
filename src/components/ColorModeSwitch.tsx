import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { IoMdMoon } from "react-icons/io";
import { LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
       <LuSun size={24} />
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size="md"
      />
      <IoMdMoon size={24} />
    </HStack>
  );
};

export default ColorModeSwitch;
