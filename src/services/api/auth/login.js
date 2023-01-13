import ApiService from '@/services/api';

// FUNCTION

export const login = async ({ params, body }) => {
  const response = await ApiService.post(`/auth/login`, body, { params });
  return response.data;
};
