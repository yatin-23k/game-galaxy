import { useQuery } from "@tanstack/react-query";
import server from "../services/server-client";

const useWishlist = () =>
  useQuery({
    queryKey: ["wishlist"],
    queryFn: () =>
      server
        .get("/wishlist", {
          headers: { username: localStorage.getItem("username") },
        })
        .then((res) => res.data),
  });

export default useWishlist;