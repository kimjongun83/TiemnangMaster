import ApiService from '@/services/api';

// FUNCTION

export const resendOTP = async ({ params, body, headers }) => {
  const response = await ApiService.post(`/auth/register-resend-otp`, body, { params, headers });
  return response.data;
};
