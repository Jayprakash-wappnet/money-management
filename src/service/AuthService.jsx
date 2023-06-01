import api from "../AxiosInterceptor";

const login = (email, password) => {
  return api.post(`/auth/login`, { email: email, password: password });
};

const AuthService = {
  login
};

export default AuthService;
