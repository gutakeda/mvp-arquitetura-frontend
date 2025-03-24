import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export const API_BASE_URL = 'http://localhost:5000/api'

const useAxios = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
  });

  axiosInstance.interceptors.request.use(
    async (config) => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
          }
        } catch (error) {
          console.error('Erro ao obter o token JWT:', error);
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return axiosInstance;
};

export default useAxios;
