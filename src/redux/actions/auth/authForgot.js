import { createActionCreator } from 'deox';

export const EForgotPasswordAction = {
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_FAILED: 'FORGOT_PASSWORD_FAILED',
};

// FUNCTION

export const forgotPasswordAction = {
  request: createActionCreator(
    EForgotPasswordAction.FORGOT_PASSWORD_REQUEST,
    (resolve) => (materials, successCallback, failedCallback) =>
      resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EForgotPasswordAction.FORGOT_PASSWORD_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(
    EForgotPasswordAction.FORGOT_PASSWORD_FAILED,
    (resolve) => (error) => resolve({ error }),
  ),
};
