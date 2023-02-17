import { call, put } from 'redux-saga/effects';
import { forgotPasswordOTPAction } from '@/redux/actions';
import { forgotPasswordOTP } from '@/services/api';
import Helpers from '@/services/auth-helpers';

// FUNCTION

export function* forgotPasswordOTPSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(forgotPasswordOTP, materials);
    const forgotPasswordOTPResponse = response;

    Helpers.storeAccessToken(response?.data?.token || '');
    yield put(forgotPasswordOTPAction.success(forgotPasswordOTPResponse));
    successCallback?.(forgotPasswordOTPResponse);
  } catch (err) {
    yield put(forgotPasswordOTPAction.failure(err));
    failedCallback?.(err);
  }
}
