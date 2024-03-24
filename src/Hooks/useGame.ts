import {useQuery} from "react-query";
import {Game} from "../entities/Game";
import APIClient from "../Services/api-client";

const gameClient = new APIClient<Game>("/games")

const useGame = (slug: string) => {
    return useQuery<Game, Error>({
        queryKey: ["games", slug],
        queryFn: () => gameClient.getOne(slug)
    })
}

export default useGame;