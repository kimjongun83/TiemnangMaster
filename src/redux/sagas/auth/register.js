import { call, put } from 'redux-saga/effects';
import { registerAction } from '@/redux/actions';
import { register } from '@/services/api';
import Helpers from '@/services/auth-helpers';

// FUNCTION

export function* registerSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(register, materials);
    const registerResponse = response;
    console.log(registerResponse, 'register response');
    Helpers.storeAccessToken(response?.data?.token || '');
    yield put(registerAction.success(registerResponse));
    successCallback?.(registerResponse);
  } catch (err) {
    yield put(registerAction.failure(err));
    failedCallback?.(err);
  }
}
