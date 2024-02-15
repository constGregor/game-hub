import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../Services/api-client";
import { useQuery } from "react-query";
import ms from "ms"


export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents")

const usePlatforms = () => {
    return useQuery({
        queryKey: ["platforms"],
        queryFn: apiClient.getAll,
        staleTime: ms("24h"),
        initialData: { 
            count: platforms.length, 
            results: platforms 
        }
    })
};

export default usePlatforms;