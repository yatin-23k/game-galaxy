import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../components/GameCard";
import GameCardSkeleton from "../components/GameCardSkeleton";
import Game from "../entities/Game";
import useWishlist from  "../hooks/useWishlist"

const WishlistPage = () => {
  const username = localStorage.getItem("username");
  if (!username) window.location.href = "/login";

   const { data: games, isLoading, error } = useWishlist();

   const skeletons = [
     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
   ];
 
   if (error) throw error;
   if (!isLoading && !games) return <Text>No games found in this category</Text>;
 
   return (
     <div>
       <Flex
         // p={{ base: 4, md: 10 }}
         p={10}
         w="100%"
         direction="column"
       >
         <Heading as="h1" fontSize="6xl" paddingLeft={10}>
           Wishlist
         </Heading>
         <SimpleGrid
           columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
           padding={10}
           spacing={5}
         >
           {isLoading &&
             skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
           {!isLoading && games?.length === 0 && (
             <Text>No games found in this category</Text>
           )}
           {games?.map((game: Game) => (
             <GameCard key={game.slug} game={game} />
           ))}
         </SimpleGrid>
       </Flex>
     </div>
   );
};

export default WishlistPage;