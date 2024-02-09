import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreListItemSkeleton = () => {
  return (
    <HStack>
      <SkeletonCircle size="32px" />
      <SkeletonText noOfLines={4} spacing="4" skeletonHeight="2" />
    </HStack>
  );
};

export default GenreListItemSkeleton;
