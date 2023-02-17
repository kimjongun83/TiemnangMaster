import ApiService from '@/services/api';

export const changePassword = async ({ params, body, headers }) => {
  const response = await ApiService.post(`/auth/forgot-reset`, body, { params, headers });
  return response.data;
};
