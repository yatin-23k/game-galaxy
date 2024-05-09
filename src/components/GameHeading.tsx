import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useLookUpGenre from '../hooks/useLookUpGenre';
import useLookUpPlatform from '../hooks/useLookUpPlatform';

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const genre = useLookUpGenre(gameQuery.genreId);
    const platform = useLookUpPlatform(gameQuery.platformId);
     
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading