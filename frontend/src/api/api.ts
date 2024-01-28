import axios from "axios";

export const api = axios.create({ baseURL: "/api", headers: { "Content-Type": "application/json" } });

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post("/api/auth/refresh", { refreshToken }, { headers: { Authorization: `Bearer ${refreshToken}` } });
        const { access_token, refresh_token } = response.data;

        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("refreshToken", refresh_token);

        originalRequest.headers.Authorization = `Bearer ${access_token}`;

        return axios(originalRequest);
      } catch (err) {
        console.log(err.response.statusText);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        return;
      }
    }
    return Promise.reject(error);
  }
);
