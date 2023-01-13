import { call, put } from 'redux-saga/effects';

import { loginAction } from '@/redux/actions';
import { login } from '@/services/api';
import Helpers from '@/services/auth-helpers';

// FUNCTION

export function* loginSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(login, materials);
    const loginResponse = response;
    Helpers.storeAccessToken(response?.data?.token || '');
    yield put(loginAction.success(loginResponse));
    successCallback?.(loginResponse);
  } catch (err) {
    yield put(loginAction.failure(err));
    failedCallback?.(err);
  }
}
