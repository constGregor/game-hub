import { Text, Image, List, HStack, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImages from "../Services/image-url";
import GenreListItemSkeleton from "./GenreListItemSkeleton";
import GenreListItemContainer from "./GenreListItemContainer";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return null;
  return (
    <List>
      <GenreListItemContainer>
        {isLoading &&
          skeletons.map((skeleton) => <GenreListItemSkeleton key={skeleton} />)}
      </GenreListItemContainer>
      {data.map((genre) => (
        <GenreListItemContainer>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImages(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="lg"
              key={genre.id}
            >
              {genre.name}
            </Button>
          </HStack>
        </GenreListItemContainer>
      ))}
    </List>
  );
};

export default GenreList;
