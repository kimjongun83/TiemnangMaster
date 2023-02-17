import ApiService from '@/services/api';

export const forgotPasswordOTP = async ({ params, body, headers }) => {
  const response = await ApiService.post(`auth/forgot-verify`, body, { params, headers });
  return response.data;
};
