import {
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import WishlistButton from "./WishlistButton";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height="100%">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Flex direction="column" height="100%">
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Link to={"/games/" + game.slug}>
            {<Heading fontSize="2xl">{game.name}</Heading>}
          </Link>
          <Emoji rating={game.rating_top} />
        </CardBody>
        <HStack justifyContent="space-between" paddingX={4} paddingBottom={4}>
          <WishlistButton gameSlug={game.slug} />
          <Button
            colorScheme="yellow"
            onClick={() => {alert("This functionality is currently under development. Please check back later!")}}
          >
            Buy
          </Button>
        </HStack>
      </Flex>
    </Card>
  )
};

export default GameCard;
