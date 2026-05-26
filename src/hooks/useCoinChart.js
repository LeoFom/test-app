import { useQuery } from "@tanstack/react-query";

import {getCoinChart} from '../api/charts.js'

export function useCoinChart(coinId) {
  return useQuery({
    queryKey: ['chart', coinId],
    queryFn: () => getCoinChart(coinId),

    staleTime: 1000 * 60,
    refetchInterval: 1000 * 15,
    refetchIntervalInBackground: true,
  })
}