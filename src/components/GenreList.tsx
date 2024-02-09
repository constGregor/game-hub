import { Text, Image, List, HStack } from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import getCroppedImages from "../Services/image-url";
import GenreListItemSkeleton from "./GenreListItemSkeleton";
import GenreListItemContainer from "./GenreListItemContainer";

const GenreList = () => {
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
            <Text fontSize="lg" key={genre.id}>
              {genre.name}
            </Text>
          </HStack>
        </GenreListItemContainer>
      ))}
    </List>
  );
};

export default GenreList;
