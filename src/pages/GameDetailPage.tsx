import {useParams} from "react-router-dom";
import useGame from "../Hooks/useGame";
import {Heading, Spinner} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameTrailer from "../Hooks/useGameTrailer";
import GameTrailer from "../components/GameTrailer";

function GameDetailPage() {
    const { slug } = useParams()
    //slug! this constant can never be null
    const { data: game, error, isLoading } = useGame(slug!)
    const { data: trailer } = useGameTrailer(slug!)

    console.log(trailer)
    if (isLoading) return <Spinner />

    if (error || !game) throw error;

    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText children={game.description_raw} />
            <GameAttributes game={game} />
            <GameTrailer id={game.id} />
        </>

    );
}

export default GameDetailPage;