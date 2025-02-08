import axiosInstance from "./axiosInstance";

export const login = async (credentials) => {
  const response = await axiosInstance.post("/auth/login", credentials);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data;
};
