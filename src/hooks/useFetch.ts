import { useState, useEffect } from "react";
import axios from "axios";
import { IData, initialData } from "../types/types";

const baseURL = "https://ipapi.co";

export const useFetch = (ipAddress?: string) => {
  const [data, setData] = useState<IData>(initialData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = ipAddress
          ? `${baseURL}/${ipAddress}/json/`
          : `${baseURL}/json/`;
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ipAddress]);

  return { data, loading, error };
};
