import { apiClient } from "./client";

export async function getCoins({ page = 1, perPage = 50 }) {
  const response = await apiClient.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      page,
      per_page: perPage,
    },
  });

  return response.data;
}