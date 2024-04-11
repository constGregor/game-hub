import {Card, CardBody, HStack, Heading, Image, Box} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImages from "../Services/image-url";
import Emoji from "./Emoji";
import {Link} from "react-router-dom";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card role="group" transition="scale 0.3s ease-in">
        <Link to={`/games/${game.id}`}>
            <Box overflow="hidden">
                <Image
                    _groupHover={{ transform: "scale(1.1)" }}
                    transition="all 250ms ease-out"
                    src={getCroppedImages(game.background_image)}

                />
            </Box>
            <CardBody>
                <HStack justifyContent="space-between" marginBottom={2}>
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize="2xl">{game.name}</Heading>
                <Emoji rating={game.rating_top} />
            </CardBody>
        </Link>
    </Card>
  );
};

export default GameCard;