import {useParams} from "react-router-dom";
import useGame from "../Hooks/useGame";
import {Heading, SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";

function GameDetailPage() {
    const { slug } = useParams()
    //slug! this constant can never be null
    const { data: game, error, isLoading } = useGame(slug!)

    if (isLoading) return <Spinner />

    if (error || !game) throw error;

    console.log(game)
    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText children={game.description_raw} />
            <GameAttributes game={game} />
        </>

    );
}

export default GameDetailPage;