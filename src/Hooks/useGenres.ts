import {useQuery} from "react-query";
import genres from "../data/genres";
import APIClient from "../Services/api-client";
import ms from "ms"
import {Genre} from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres")

const useGenres = () => {
    return useQuery({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: ms("24h"),
        initialData: { 
            count: genres.length,
            results: genres,
            next: null
        }
    })
}

export default useGenres;