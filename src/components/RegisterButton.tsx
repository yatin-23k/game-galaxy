import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const RegisterButton = () => {
  return (
    <Button colorScheme="blue" variant="outline" size="sm">
      <Link to="/register">Register</Link>
    </Button>
  );
};

export default RegisterButton;