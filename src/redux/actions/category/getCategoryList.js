import { createActionCreator } from 'deox';

export const EGetCategoryListAction = {
  CATEGORY_LIST: 'CATEGORY_LIST',
  CATEGORY_LIST_REQUEST: 'CATEGORY_LIST_REQUEST',
  CATEGORY_LIST_SUCCESS: 'CATEGORY_LIST_SUCCESS',
  CATEGORY_LIST_FAILED: 'CATEGORY_LIST_FAILED',
};

// FUNCTION

export const CategoryListAction = {
  request: createActionCreator(
    EGetCategoryListAction.CATEGORY_LIST_REQUEST,
    (resolve) => (materials, successCallback, failedCallback) =>
      resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetCategoryListAction.CATEGORY_LIST_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(EGetCategoryListAction.CATEGORY_LIST_FAILED, (resolve) => (error) => resolve({ error })),
};
