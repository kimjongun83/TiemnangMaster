import { call, put } from 'redux-saga/effects';

import { getProductByCategories } from '@/services/api/product';
import { getProductByCategoriesAction } from '@/redux/actions';

// FUNCTION

export function* getProductByCategoriesSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getProductByCategories, materials);
    const getProductByCategoriesResponse = response;

    yield put(getProductByCategoriesAction.success(getProductByCategoriesResponse));
    successCallback?.(getProductByCategoriesResponse);
  } catch (err) {
    yield put(getProductByCategoriesAction.failure(err));
    failedCallback?.(err);
  }
}
