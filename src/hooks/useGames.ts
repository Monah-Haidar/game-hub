import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client.ts";
import useGameQueryStore from "../stores/store.ts";
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

const useGames = () => {

    const gameQuery = useGameQueryStore(s => s.gameQuery);


    return useInfiniteQuery<FetchResponse<Game>, Error>({
        initialPageParam: 1,
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam}) => apiClient.getAll({
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam,
            }}),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined,
    })
}
    

export default useGames;


