import { createActionCreator } from 'deox';

// CONSTANTS

export const EResendOTPAction = {
  RESEND_OTP: 'RESEND_OTP',
  RESEND_OTP_REQUEST: 'RESEND_OTP_REQUEST',
  RESEND_OTP_SUCCESS: 'RESEND_OTP_SUCCESS',
  RESEND_OTP_FAILED: 'RESEND_OTP_FAILED',
};

// FUNCTION

export const resendOTPAction = {
  request: createActionCreator(
    EResendOTPAction.RESEND_OTP_REQUEST,
    (resolve) => (materials, successCallback, failedCallback) =>
      resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(EResendOTPAction.RESEND_OTP_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EResendOTPAction.RESEND_OTP_FAILED, (resolve) => (error) => resolve({ error })),
};
