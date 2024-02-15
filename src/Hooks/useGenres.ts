import { useQuery } from "react-query";
import apiClient from "../Services/api-client";
import { FetchResponse } from "../Services/api-client";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
    return useQuery<Genre[], Error>({
        queryKey: ["genres"],
        queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data.results),
        staleTime: 24 * 60 * 60 * 1000, //1 day
        initialData: genres
    })
}

export default useGenres;