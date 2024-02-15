import apiClient from "../Services/api-client";
import platforms from "../data/platforms";
import { FetchResponse } from "../Services/api-client";
import { useQuery } from "react-query";


export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {
    return useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: () => apiClient.get<FetchResponse<Platform>>("/genres").then(res => res.data.results),
        staleTime: 24 * 60 * 60 * 1000, //1 day
        initialData: platforms
    })
};

export default usePlatforms;