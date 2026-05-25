import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    Accept: "application/json",
  },
});