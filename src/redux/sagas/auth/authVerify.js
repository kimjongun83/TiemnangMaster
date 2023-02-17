import { call, put } from 'redux-saga/effects';

import { verifyAction } from '@/redux/actions';
import { verify } from '@/services/api';
import Helpers from '@/services/auth-helpers';

// FUNCTION

export function* verifySaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(verify, materials);
    const verifyResponse = response;
    Helpers.storeAccessToken(response?.data?.token || '');
    yield put(verifyAction.success(verifyResponse));
    successCallback?.(verifyResponse);
  } catch (err) {
    yield put(verifyAction.failure(err));
    failedCallback?.(err);
  }
}
