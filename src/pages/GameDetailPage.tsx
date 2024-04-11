import {useParams} from "react-router-dom";
import useGame from "../Hooks/useGame";
import { Heading, SimpleGrid, Spinner, VStack } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import Gallery from "../components/Gallery";

function GameDetailPage() {
    const { slug } = useParams()
    //slug! this constant can never be null
    const { data: game, error, isLoading } = useGame(slug!)

    if (isLoading) return <Spinner />

    if (error || !game) throw error;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            <VStack gap={2} align="start">
                <Heading>{game.name}</Heading>
                <ExpandableText children={game.description_raw} />
                <GameAttributes game={game} />
            </VStack>
            <VStack>
                <GameTrailer id={game.id} />
                <Gallery id={game.id} />
            </VStack>
        </SimpleGrid>

    );
}

export default GameDetailPage;