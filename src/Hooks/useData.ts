import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";


interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        setLoading(true);
        // after fetch we need to stop it -> controller
      const controller = new AbortController();
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
        .then((res) => {
            setData(res.data.results)
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
        });

        //clean up function
        return () => controller.abort();

    }, deps ? [...deps] : []);
  
    return { data, error, isLoading }

}

export default useData;