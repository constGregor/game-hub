import { Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../Hooks/useGenre";
import usePlatform from "../Hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);
  const text = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Text paddingLeft={2} as="b" fontSize="5xl">
      {text}
    </Text>
  );
};

export default GameHeading;
