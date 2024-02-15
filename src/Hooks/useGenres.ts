import { useQuery } from "react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../Services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new APIClient<Genre>("/genres")

const useGenres = () => {
    return useQuery({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, //1 day
        initialData: { 
            count: genres.length, 
            next: null, 
            results: genres 
        }
    })
}

export default useGenres;