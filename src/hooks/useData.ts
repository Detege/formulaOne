import { useEffect, useRef, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

const useData = <T>(
  endpoint: string,
  requestconfig?: AxiosRequestConfig,
  deps?: any[],
  interval?: number
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(
    () => {
      const fetchData = () => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
          .get(endpoint, { signal: controller.signal, ...requestconfig })
          .then((res) => {
            const responseData = res.data;

            // Check if response is an array of arrays and combine them
            if (
              Array.isArray(responseData) &&
              responseData.every(Array.isArray)
            ) {
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
      };

      fetchData(); // Initial fetch

      if (pollingRef.current) {
        clearInterval(pollingRef.current);
      }

      if (interval) {
        pollingRef.current = setInterval(fetchData, interval);
      }
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
