import useGames from "../Hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <ul>
      {error && <Text>"No games found"</Text>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
