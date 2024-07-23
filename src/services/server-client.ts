import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://gamegalaxy-server.vercel.app/",
});

// const axiosInstance = axios.create({
//   baseURL: "http:localhost:3000/api",
// });

export default axiosInstance;