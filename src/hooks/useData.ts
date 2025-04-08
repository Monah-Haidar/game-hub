import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";


interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
            .then((res) => {
                setIsLoading(false);
                setData(res.data.results)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err);
                setIsLoading(false);
            })

        return () => controller.abort();
    }, [])

    return {error, data, isLoading};
}

export default useData;