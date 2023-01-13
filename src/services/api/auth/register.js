import ApiService from '@/services/api';

// FUNCTION

export const register = async ({ params, body }) => {
  const response = await ApiService.post(`/auth/register`, body, { params });
  return response.data;
};
