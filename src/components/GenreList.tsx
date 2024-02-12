import { Image, List, HStack, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImages from "../Services/image-url";
import GenreListItemContainer from "./GenreListItemContainer";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data } = useGenres();
  return (
    <>
      <Heading paddingBottom={2} size="md" as="h2">
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <GenreListItemContainer key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImages(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
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
