import { Image, List, HStack, Button, Heading } from "@chakra-ui/react";
import useGenres  from "../Hooks/useGenres";
import getCroppedImages from "../Services/image-url";
import GenreListItemContainer from "./GenreListItemContainer";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data } = useGenres();
  const setSelectedGenreId = useGameQueryStore(store => store.setGenreId);
  const selectedGenreId = useGameQueryStore(store => store.gameQuery.genreId);

  return (
    <>
      <Heading paddingBottom={2} size="md" as="h2">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <GenreListItemContainer key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImages(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                variant="link"
                fontSize="lg"
                key={genre.id}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </GenreListItemContainer>
        ))}
      </List>
    </>
  );
};

export default GenreList;