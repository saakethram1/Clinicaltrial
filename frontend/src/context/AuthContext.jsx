import { create } from 'zustand';
import axiosInstance from '../api/axiosInstance';

const useAuth = create((set) => ({
  user: null,
  token: localStorage.getItem('token') || null,

  login: async (email, password) => {
    try {
      const res = await axiosInstance.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      set({ user: res.data.user, token: res.data.token });
      return res.data;
    } catch (error) {
      console.error(error.response?.data || error.message);
      throw new Error(error.response?.data?.msg || 'Login failed');
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null });
  }
}));

export default useAuth;
