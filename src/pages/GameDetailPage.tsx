import {useParams} from "react-router-dom";
import useGame from "../Hooks/useGame";
import {Heading, Spinner, Text} from "@chakra-ui/react";

function GameDetailPage() {
    const { slug } = useParams()
    //slug! this constant can never be null
    const { data: game, error, isLoading } = useGame(slug!)

    if (isLoading) return <Spinner />

    if (error || !game) throw error;

    return (
        <>
            <Heading>{game.name}</Heading>
            <Text>{game.description_raw}</Text>
        </>

    );
}

export default GameDetailPage;