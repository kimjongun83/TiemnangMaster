import { createActionCreator } from 'deox';

// CONSTANTS

export const EVerifyAction = {
  VERIFY: 'VERIFY',
  VERIFY_REQUEST: 'VERIFY_REQUEST',
  VERIFY_SUCCESS: 'VERIFY_SUCCESS',
  VERIFY_FAILED: 'VERIFY_FAILED',
};

// FUNCTION

export const verifyAction = {
  request: createActionCreator(
    EVerifyAction.VERIFY_REQUEST,
    (resolve) => (materials, successCallback, failedCallback) =>
      resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(EVerifyAction.VERIFY_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EVerifyAction.VERIFY_FAILED, (resolve) => (error) => resolve({ error })),
};
