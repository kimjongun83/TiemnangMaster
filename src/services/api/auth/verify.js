import ApiService from '@/services/api';

// FUNCTION

export const verify = async ({ params, body, headers }) => {
  const response = await ApiService.post(`/auth/verify`, body, { params, headers });
  return response.data;
};
