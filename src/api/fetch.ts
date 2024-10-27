import { useQuery } from "@tanstack/react-query";

import customAxios from "./axios";
import { initialIp } from "../types/types";

export const useFetch = (ipAddress: string) => {
  const url = ipAddress ? `/${ipAddress}/json/` : `/json/`;

  return useQuery({
    queryKey: ["ip", ipAddress],
    queryFn: async () => {
      const { data } = await customAxios.get(url);
      return data;
    },
    initialData: initialIp,
  });
};
