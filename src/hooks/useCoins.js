import { useQuery } from "@tanstack/react-query";

import { getCoins } from "../api/coins";

export function useCoins() {
  return useQuery({
    queryKey: ["coins"],
    queryFn: () => getCoins({ page: 1, perPage: 50 }),

    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,

    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,

    retry: 1,
  });
}