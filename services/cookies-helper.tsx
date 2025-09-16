// utils/storage.ts

// ---- Cookie ----
export const getCookie = (name: string): string | null => {
  if (typeof window === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));

  return match ? decodeURIComponent(match.split("=")[1]) : null;
};

export const setCookie = (
  name: string,
  value: string,
  days = 1
): void => {
  if (typeof window === "undefined") return;

  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/; Secure; SameSite=Strict`;
};

// ---- LocalStorage ----
export const getStorage = (key: string): string | null =>
  typeof window !== "undefined" ? localStorage.getItem(key) : null;

export const setStorage = (key: string, value: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

export const clearCookie= () => document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
