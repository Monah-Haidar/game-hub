import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import genres from "../components/data/genres.ts";

const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
    return useQuery({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        initialData: { count: genres.length, results: genres, next: null }, // Initial data for genres
    });
};

export default useGenres;
