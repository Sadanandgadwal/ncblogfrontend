import axios from "axios";

// Create an instance of Axios
const tokenApi = axios.create({
  baseURL: "https://ncblogbackend-production.up.railway.app/", // Replace with your API base URL
});

tokenApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
tokenApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      return tokenApi
        .post("/refresh-token")
        .then((response) => {
          const newToken = response.data.token;
          // Update the token in the local storage
          localStorage.setItem("token", newToken);
          // Retry the original request with the new token
          error.config.headers["Authorization"] = `Bearer ${newToken}`;
          return axios.request(error.config);
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    }

    return Promise.reject(error);
  }
);

export default tokenApi;
