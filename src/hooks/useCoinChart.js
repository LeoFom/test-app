import { useQuery } from "@tanstack/react-query";

import {getCoinChart} from '../api/charts.js'

export function useCoins(coinId) {
  return useQuery({
    queryKey: ['chart'],
    queryFn: () => getCoinChart(coinId),

    staleTime: 1000 * 60,
    refetchInterval: 1000 * 15,
    refetchIntervalInBackground: true,
  })
}