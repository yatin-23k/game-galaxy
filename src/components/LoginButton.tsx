import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Button colorScheme="blue" size="sm">
      <Link to="/login">Login</Link>
    </Button>
  );
};

export default LoginButton;