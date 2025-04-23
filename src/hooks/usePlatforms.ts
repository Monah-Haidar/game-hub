import platforms from "../components/data/platforms.ts";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () =>
    useQuery({
        queryKey: ["platforms"],
        queryFn: apiClient.getAll,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        initialData: { count: platforms.length, results: platforms, next: null },
    });

export default usePlatforms;
