import { createActionCreator } from 'deox';

export const EChangePassWordAction = {
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  CHANGE_PASSWORD_REQUEST: 'CHANGE_PASSWORD_REQUEST',
  CHANGE_PASSWORD_SUCCESS: 'CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_FAILED: 'CHANGE_PASSWORD_FAILED',
};

// FUNCTION

export const changePassWordAction = {
  request: createActionCreator(
    EChangePassWordAction.CHANGE_PASSWORD_REQUEST,
    (resolve) => (materials, successCallback, failedCallback) =>
      resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EChangePassWordAction.CHANGE_PASSWORD_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(
    EChangePassWordAction.CHANGE_PASSWORD_FAILED,
    (resolve) => (error) => resolve({ error }),
  ),
};
