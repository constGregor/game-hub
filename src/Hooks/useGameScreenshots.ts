import {useQuery} from "react-query";
import APIClient from "../Services/api-client";
import GameScreenshots from "../entities/GameScreenshots";

const useGameScreenshots = (id: string) => {
    const apiClient = new APIClient<GameScreenshots>(`/games/${id}/screenshots`)
    return useQuery({
        queryKey: ["screenshots", id],
        queryFn: apiClient.getAll
    })
}

export default useGameScreenshots;