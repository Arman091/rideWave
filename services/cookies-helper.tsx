export const getCookieJS = (key = "", req:any = null) => {
    let cookieState;
    let valueToReturn = null;
    if (req?.headers?.cookie) cookieState = req.headers?.cookie;
    if (process.browser && document) cookieState = document.cookie;
    if (cookieState) {
        const rawCookie = cookieState.split(";").find((item:any) => item.trim().startsWith(`${key}=`));
        if (rawCookie) valueToReturn = rawCookie.split("=")[1];
    }
    return valueToReturn;
}

export const setCookieJS = (key = "", value:any, expireInDays = 1) => {
    if (process.browser && document) {
        const now = new Date();
        const expireTime = now.getTime() + (expireInDays*24*60*60*1000); // 24 hours
        now.setTime(expireTime);
        document.cookie = `${key}=${value}; SameSite=strict; Secure; expires=${now.toUTCString()}; path=/;`;
      } else {
        console.log("setCookie failed");
      }
}

export const clearAllCookies = () => document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

export const setLocalStorageData = (key = "", value:any) => {
  if (process.browser && document) {
      localStorage.setItem(key, value);
    } else {
      console.log("set local storage  failed");
    }
}

export const getLocalStorageData = (key = "") => {
  if (process.browser && document) {
      return localStorage.getItem(key);
    } else {
      console.log("get local storage  failed");
    }
}

export const clearAllLocalStorage = (key = "") => {
  if (process.browser && document) {
      return localStorage.clear();
    } else {
      console.log("clear local storage  failed");
    }
}

export const clearSelectedLocalStorage = (key = "") => {
  if (process.browser && document) {
    return localStorage.removeItem(key);
  } else {
    console.log("clear local storage  failed");
  }
}