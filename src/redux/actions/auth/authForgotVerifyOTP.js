import { createActionCreator } from 'deox';

export const EForgotPasswordOTPAction = {
  FORGOT_PASSWORD_OTP: 'FORGOT_PASSWORD_OTP',
  FORGOT_PASSWORD_OTP_REQUEST: 'FORGOT_PASSWORD_OTP_REQUEST',
  FORGOT_PASSWORD_OTP_SUCCESS: 'FORGOT_PASSWORD_OTP_SUCCESS',
  FORGOT_PASSWORD_OTP_FAILED: 'FORGOT_PASSWORD_OTP_FAILED',
};

// FUNCTION

export const forgotPasswordOTPAction = {
  request: createActionCreator(
    EForgotPasswordOTPAction.FORGOT_PASSWORD_OTP_REQUEST,
    (resolve) => (materials, successCallback, failedCallback) =>
      resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EForgotPasswordOTPAction.FORGOT_PASSWORD_OTP_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(
    EForgotPasswordOTPAction.FORGOT_PASSWORD_OTP_FAILED,
    (resolve) => (error) => resolve({ error }),
  ),
};
