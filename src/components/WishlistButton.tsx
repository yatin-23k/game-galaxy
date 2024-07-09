import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import server from "../services/server-client";
import axios from "axios";

const WishlistButton = ({ gameSlug }: { gameSlug: string }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const checkWishlist = async () => {
      try {
        const res = await server.post(
          "/wishlist/check",
          { game_id: gameSlug },
          { headers: { username: localStorage.getItem("username") } }
        );
        setIsWishlisted(res.status === 200);
      } catch (error) {
        console.log("error", error);
      }
    };
    checkWishlist();
  }, [gameSlug]);

  const handleSubmit = async () => {
    if (isWishlisted) {
      try {
        await server.post(
          "/wishlist/delete",
          { game_id: gameSlug },
          { headers: { username: localStorage.getItem("username") } }
        );
        setIsWishlisted(false);
      } catch (error) {
        console.log("error", error);
      }
    } else {
      try {
        await server.post(
          "/wishlist/add",
          { game_id: gameSlug },
          { headers: { username: localStorage.getItem("username") } }
        );
        setIsWishlisted(true);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  return (
    <Button onClick={handleSubmit}>
      {isWishlisted ? "In Wishlist" : "Add to Wishlist"}
    </Button>
  );
};

export default WishlistButton;