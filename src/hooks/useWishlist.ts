import { useQuery } from "@tanstack/react-query";
import server from "../services/server-client";
import APIClient from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useWishlist = () =>
  useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await server.get("/wishlist", {
        headers: { username: localStorage.getItem("username") },
      });

      const items = res.data;

      const games = await Promise.all(
        items.map(async (item: any) => {
          const slug = item.game_id;
          const res = await apiClient.get(slug);
          return res;
        })
      );

      return games;
    },
});

export default useWishlist;