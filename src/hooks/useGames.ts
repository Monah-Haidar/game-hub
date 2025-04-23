import { useQuery } from "@tanstack/react-query";
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

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.getAll({
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
        }}),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
})
    

export default useGames;
