import APIClient from "../Services/api-client";
import {useQuery} from "react-query";
import useGameQueryStore from "../store";

interface GameDetail {
    id: number;
    slug: string;
    name: string;
    description_raw: string;
}

const apiClient = new APIClient<GameDetail>('/games')

const useGame = (slug: string) => {
    return useQuery<GameDetail, Error>({
        queryKey: ["games", slug],
        queryFn: () => apiClient.getOne(slug)
    })
}

export default useGame;