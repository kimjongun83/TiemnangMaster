import { createActionCreator } from 'deox';

export const EGetProductbyCategoriesAction = {
  GET_PRODUCTS_BY_CATEGORIES: 'GET_PRODUCTS_BY_CATEGORIES',
  GET_PRODUCTS_BY_CATEGORIES_REQUEST: 'GET_PRODUCTS_BY_CATEGORIES_REQUEST',
  GET_PRODUCTS_BY_CATEGORIES_SUCCESS: 'GET_PRODUCTS_BY_CATEGORIES_SUCCESS',
  GET_PRODUCTS_BY_CATEGORIES_FAILED: 'GET_PRODUCTS_BY_CATEGORIES_FAILED',
};

// FUNCTION

export const getProductByCategoriesAction = {
  request: createActionCreator(
    EGetProductbyCategoriesAction.GET_PRODUCTS_BY_CATEGORIES_REQUEST,
    (resolve) => (materials, successCallback, failedCallback) =>
      resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetProductbyCategoriesAction.GET_PRODUCTS_BY_CATEGORIES_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(
    EGetProductbyCategoriesAction.GET_PRODUCTS_BY_CATEGORIES_FAILED,
    (resolve) => (error) => resolve({ error }),
  ),
};
