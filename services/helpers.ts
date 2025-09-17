import axiosInstance from "./interceptor";
import { API_BASE_URL} from "@/lib/config";

// 🔹 Utility to build URLs
const buildUrl = (base: string, endpoint: string) => `${base}${endpoint}`;

// 🔹 Common headers factory
const createHeaders = (extra: Record<string, string> = {}) => ({
  "Content-Type": "application/json",
  lang: "en",
  platform: "web",
  ...extra,
});

// 🔹 Generic request helpers
export const apiPost = (endpoint: string, data: object, headers = {}, base = API_BASE_URL) =>
  axiosInstance.post(buildUrl(base, endpoint), data, { headers: createHeaders(headers) });

export const apiGet = (endpoint: string, headers = {}, base = API_BASE_URL) =>
  axiosInstance.get(buildUrl(base, endpoint), { headers: createHeaders(headers) });

export const apiPatch = (endpoint: string, data: object, headers = {}, base = API_BASE_URL) =>
  axiosInstance.patch(buildUrl(base, endpoint), data, { headers: createHeaders(headers) });

export const apiDelete = (endpoint: string, headers = {}, base = API_BASE_URL) =>
  axiosInstance.delete(buildUrl(base, endpoint), { headers: createHeaders(headers) });