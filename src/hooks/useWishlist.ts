import { useQuery } from "@tanstack/react-query";
import server from "../services/server-client";
import APIClient from "../services/api-client";
import Game from "../entities/Game";

// const useWishlist = () =>
//   useQuery({
//     queryKey: ["wishlist"],
//     queryFn: () =>
//       server
//         .get("/wishlist", {
//           headers: { username: localStorage.getItem("username") },
//         })
//         .then((res) => res.data),
//   });
  
const apiClient = new APIClient<Game>("/games");

const useWishlist = () =>
  useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await server.get("/wishlist", {
        headers: { username: localStorage.getItem("username") },
      });

      const items = res.data;

      console.log(items);

      // get game details for each game in wishlist_items
      const games = await Promise.all(
        items.map(async (item: { game_id: any; }) => {
          const slug = item.game_id;
          const res = await apiClient.get(slug);
          return res;
        })
      );

      console.log(games);

      return games;
    },
});

export default useWishlist;