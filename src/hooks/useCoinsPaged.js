import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { getCoins } from '../api/coins'

export function useCoinsPaged(page) {
  return useQuery({
    queryKey: ['coin', page],
    queryFn: () => getCoins({
      page,
      perPage: 20,
    }),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
  })
}