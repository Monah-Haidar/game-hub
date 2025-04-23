import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client.ts';
import { FetchResponse } from "../services/api-client.ts";
import genres from '../components/data/genres.ts';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}



const useGenres = () => {

    return useQuery({
        queryKey: ['genres'],
        queryFn: () => 
            apiClient
                .get<FetchResponse<Genre>>('/genres')
                .then(res => res.data.results),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        initialData: genres,
    })


}

export default useGenres;







