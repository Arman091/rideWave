import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { getCookie, setCookie, clearCookie } from "./cookies-helper";
import {API_BASE_URL} from "@/lib/config"
interface RefreshResponse {
  accessToken: string;
}

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || API_BASE_URL,
});

let isRefreshing = false;
let refreshQueue: Array<(token: string) => void> = [];

// Request Interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getCookie("accessToken");
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          refreshQueue.push((token: string) => {
            if (originalRequest.headers) {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
            }
            resolve(api(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = getCookie("refreshToken");
        const resp = await axios.post<RefreshResponse>(
          `${process.env.NEXT_PUBLIC_API_URL || API_BASE_URL }/auth/refresh`,
          { refreshToken }
        );

        const newAccessToken = resp.data.accessToken;
        setCookie("accessToken", newAccessToken, 1);

        refreshQueue.forEach((cb) => cb(newAccessToken));
        refreshQueue = [];

        if (originalRequest.headers) {
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        }

        return api(originalRequest);
      } catch (err) {
        clearCookie();
        clearCookie();
        window.location.href = "/login";
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
