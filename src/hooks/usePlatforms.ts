import platforms from "../components/data/platforms.ts";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import { FetchResponse } from "./useData.ts";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}



const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>(`/platforms/lists/parents`)
        .then(res => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: {count: platforms.length, results: platforms}, // Initial data for platforms
})

export default usePlatforms;