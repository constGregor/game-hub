import { Text } from "@chakra-ui/react";
import useGenre from "../Hooks/useGenre";
import usePlatform from "../Hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore(store => store.gameQuery.genreId);
  const selectedPlatformId = useGameQueryStore(store => store.gameQuery.platformId);

  const genre = useGenre(selectedGenreId);
  const platform = usePlatform(selectedPlatformId);

  const text = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Text paddingLeft={2} as="b" fontSize="5xl">
      {text}
    </Text>
  );
};

export default GameHeading;