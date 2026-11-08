import axios from 'axios';
import { useAuthStore } from '../stores/authStore';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Bearer 없이 코드 그대로
export const getAuthHeaders = () => ({
  Authorization: useAuthStore.getState().authorizationCode ?? '',
});
