import { useInfiniteQuery } from "react-query";
import APIClient, { FetchResponse } from "../Services/api-client";
import ms from "ms"
import useGameQueryStore from "../store";
import Game from "../entities/Game";

const gameClient = new APIClient<Game>("/games")

const useGames = () => {
  const gameQuery =  useGameQueryStore(store => store.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => gameClient.getAll({
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
     staleTime: ms("24h"),
  })
}

export default useGames;