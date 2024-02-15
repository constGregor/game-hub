import { useInfiniteQuery } from "react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../Services/api-client";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const apiClient = new APIClient<Game>("/games")

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({ 
      params: {
        genres: gameQuery.genreId, 
        platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      }
     }),
     getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
     },
     staleTime: 24 * 60 * 60 * 1000
  })
}

export default useGames;