import { createActionCreator } from 'deox';

// CONSTANTS

export const ERegisterAction = {
  REGISTER: 'REGISTER',
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILED: 'REGISTER_FAILED',
};

// FUNCTION

export const registerAction = {
  request: createActionCreator(
    ERegisterAction.REGISTER_REQUEST,
    (resolve) => (materials, successCallback, failedCallback) =>
      resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(ERegisterAction.REGISTER_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(ERegisterAction.REGISTER_FAILED, (resolve) => (error) => resolve({ error })),
};
