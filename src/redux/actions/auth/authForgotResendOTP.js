import { createActionCreator } from 'deox';

export const EForgotPasswordResendOTPAction = {
  FORGOT_PASSWORD_RESEND_OTP: 'FORGOT_PASSWORD_RESEND_OTP',
  FORGOT_PASSWORD_RESEND_OTP_REQUEST: 'FORGOT_PASSWORD_RESEND_OTP_REQUEST',
  FORGOT_PASSWORD_RESEND_OTP_SUCCESS: 'FORGOT_PASSWORD_RESEND_OTP_SUCCESS',
  FORGOT_PASSWORD_RESEND_OTP_FAILED: 'FORGOT_PASSWORD_RESEND_OTP_FAILED',
};

// FUNCTION

export const forgotPasswordResendOTPAction = {
  request: createActionCreator(
    EForgotPasswordResendOTPAction.FORGOT_PASSWORD_RESEND_OTP_REQUEST,
    (resolve) => (materials, successCallback, failedCallback) =>
      resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EForgotPasswordResendOTPAction.FORGOT_PASSWORD_RESEND_OTP_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(
    EForgotPasswordResendOTPAction.FORGOT_PASSWORD_RESEND_OTP_FAILED,
    (resolve) => (error) => resolve({ error }),
  ),
};
