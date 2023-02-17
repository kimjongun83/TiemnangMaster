import ApiService from '@/services/api';

export const forgotPasswordResendOTP = async ({ params, body, headers }) => {
  const response = await ApiService.post(`/auth/forgot-resend-otp`, body, { params, headers });
  return response.data;
};
