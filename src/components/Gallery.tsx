import useGameScreenshots from "../Hooks/useGameScreenshots";
import {GridItem, SimpleGrid, Image} from "@chakra-ui/react";

interface Props {
   id: string;
}

function Gallery({ id }: Props) {
    const { data, error, isLoading } = useGameScreenshots(id)

    if (isLoading) return null;

    if (error) throw error;

    return (
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={2}>
            {data?.results.map(shot =>
                <GridItem key={shot.id}>
                    <Image src={shot.image} />
                </GridItem>
            )}
        </SimpleGrid>
    );
}

export default Gallery;