import { Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../Hooks/useGenres";
import usePlatforms from "../Hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genre = genres?.results.find((item) => item.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (item) => item.id === gameQuery.platformId
  );

  const text = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Text paddingLeft={2} as="b" fontSize="5xl">
      {text}
    </Text>
  );
};

export default GameHeading;
