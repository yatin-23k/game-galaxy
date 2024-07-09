import { Button } from "@chakra-ui/react";

const LogoutButton = () => {
    function logout() {
        localStorage.removeItem("username");
        window.location.href = "/";
    }

    return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;