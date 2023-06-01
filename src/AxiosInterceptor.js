import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: ""
});
// removed baseURL due to confidentiality

const useNavigationInterceptor = () => {
  const navigate = useNavigate();

  // Request interceptor
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      console.error("Request interceptor error:", error);
      return Promise.reject(error);
    }
  );

  // Response interceptor
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // Redirect to the login page
        localStorage.clear();
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
      console.error("Response interceptor error:", error);
      return Promise.reject(error);
    }
  );
};

export { useNavigationInterceptor };
export default api;
