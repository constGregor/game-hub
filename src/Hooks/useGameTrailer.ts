import {useQuery} from "react-query";
import GameTrailer from "../entities/GameTrailer";
import APIClient from "../Services/api-client";

const useGameTrailer = (id: string | number) => {
    const apiClient = new APIClient<GameTrailer>(`/games/${id}/movies`)
    return useQuery({
        queryKey: ["movies", id],
        queryFn: apiClient.getAll
    })
}

export default useGameTrailer;