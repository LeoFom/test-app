import { apiClient } from './client.js'

export async function getCoinChart(coinId){
  const response = await apiClient(
    `/coins/${coinId}/market_chart`,
    {
      params: {
        vs_currency: 'usd',
        days: 7,
      }
    }
  )

  return response.data
}