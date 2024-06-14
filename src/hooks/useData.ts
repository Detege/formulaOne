import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

const useData = <T>(endpoint: string, requestconfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get(endpoint, { signal: controller.signal, ...requestconfig })
      .then((res) => {
        const responseData = res.data;

        // Check if response is an array of arrays and combine them
        if (Array.isArray(responseData) && responseData.every(Array.isArray)) {
          const combinedData = responseData.flat();
          setData(combinedData);
        } else {
          setData(responseData);
        }

        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err.message);
      });

    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export default useData;