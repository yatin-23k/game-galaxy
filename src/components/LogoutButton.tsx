import { Button } from "@chakra-ui/react";

const LogoutButton = () => {
  const username = localStorage.getItem("username");
  if (!username) window.location.href = "/login";

  localStorage.removeItem("username");
  window.location.href = "/";

  return <Button>Logout</Button>;
};

export default LogoutButton;