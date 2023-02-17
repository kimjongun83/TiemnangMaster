import ApiService from '@/services/api';

export const forgotPassword = async ({ params, body }) => {
  const response = await ApiService.post(`/auth/forgot`, body, { params });
  return response.data;
};
