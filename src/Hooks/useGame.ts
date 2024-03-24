import {useQuery} from "react-query";
import {Game, gameClient} from "../Services/gameService";

const useGame = (slug: string) => {
    return useQuery<Game, Error>({
        queryKey: ["games", slug],
        queryFn: () => gameClient.getOne(slug)
    })
}

export default useGame;