import platforms from "../data/platforms";
import APIClient from "../Services/api-client";
import { useQuery } from "react-query";


export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents")

const usePlatforms = () => {
    return useQuery<Platform[], Error>({
        queryKey: ["platforms"],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, //1 day
        initialData: platforms
    })
};

export default usePlatforms;