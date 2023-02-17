import { call, put } from 'redux-saga/effects';

import { changePassword } from '@/services/api';
import { changePassWordAction } from '@/redux/actions';

// FUNCTION

export function* changePassWordSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(changePassword, materials);
    const changePassWordResponse = response;

    yield put(changePassWordAction.success(changePassWordResponse));
    successCallback?.(changePassWordResponse);
  } catch (err) {
    yield put(changePassWordAction.failure(err));
    failedCallback?.(err);
  }
}
