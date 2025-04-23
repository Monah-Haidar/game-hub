import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App.tsx";
import ApiClient, { FetchResponse } from "../services/api-client.ts";
import { Platform } from "./usePlatforms.ts";

const apiClient = new ApiClient<Game>('/games');

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
    initialPageParam: 1,
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam}) => apiClient.getAll({
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam,
        }}),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined,
})
    

export default useGames;


