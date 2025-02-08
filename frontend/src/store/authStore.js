import { create } from "zustand";
import { login, getCurrentUser } from "../api/auth";

const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,

  loginUser: async (credentials) => {
    try {
      const { token, user } = await login(credentials);
      localStorage.setItem("token", token);
      set({ user, token });
      return true;
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  },

  fetchUser: async () => {
    try {
      const user = await getCurrentUser();
      set({ user });
    } catch (error) {
      console.error("Error fetching user", error);
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));

export default useAuthStore;
