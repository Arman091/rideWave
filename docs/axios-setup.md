# Axios Setup Documentation

This document explains how Axios is configured in our project, including 
**request/response interceptors**, **header modification**, and **token refresh logic**.

---

## 1. Installation

Install Axios via npm or yarn:

```bash
npm install axios
# or
yarn add axios
```

## Centralized Axios Instance

We use a centralized Axios instance for all API requests.  
This instance is pre-configured with a **base URL** and **timeout** for consistency across the project.  

It includes **request** and **response interceptors** to handle common tasks such as attaching authentication tokens, managing token expiration, and standardizing error handling.

- Access tokens are automatically attached to every request via the request interceptor.  
- If a request returns **401 Unauthorized**, the response interceptor will:
  1. Attempt to refresh the access token using a refresh token.  
  2. Retry the original request with the new token.  
  3. Logout the user if the refresh fails.

### Key Features

#### Request Interceptor
- Adds **Authorization header** with access token automatically.  
- Sets **Content-Type** to `application/json`.  
- Can be extended to add custom headers or tenant-specific data if required.

#### Response Interceptor
- Handles **`401 Unauthorized`** responses automatically.  
- Triggers **token refresh logic** to maintain user session.  
- Retries **original request** after token refresh.  
- Logs out user if token refresh fails.  
- Can standardize error responses for all API calls.

### Usage and Reusable Methods

By using this centralized Axios instance, we create **reusable API methods** that keep our code DRY:

```javascript
// IMPORTING axios instance where we have already attached base url and Header modification Logic.
import api from "@/api/axios";

// Example reusable GET method
export const fetchUserProfile = () => api.get("/user/profile");

// Example reusable POST method
export const loginUser = (credentials) => api.post("/auth/login", credentials);

// Example with dynamic headers
export const updateUserSettings = (data, customHeader) =>
  api.put("/user/settings", data, { headers: { "X-Custom": customHeader } });

