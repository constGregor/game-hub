import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../Services/api-client";
import { useQuery } from "react-query";


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
        staleTime: 24 * 60 * 60 * 1000, //1 day
        initialData: { 
            count: platforms.length, 
            next: null, 
            results: platforms 
        }
    })
};

export default usePlatforms;