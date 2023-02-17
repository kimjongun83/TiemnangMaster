import { call, put } from 'redux-saga/effects';

import { getListCategory } from '@/services/api/category';
import { CategoryListAction } from '@/redux/actions/category';

// FUNCTION

export function* getCategoryListSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getListCategory, materials);
    const getCategoryListResponse = response;

    yield put(CategoryListAction.success(getCategoryListResponse));
    successCallback?.(getCategoryListResponse);
  } catch (err) {
    yield put(CategoryListAction.failure(err));
    failedCallback?.(err);
  }
}
