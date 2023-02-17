import { call, put } from 'redux-saga/effects';

import { resendOTPAction } from '@/redux/actions';
import { resendOTP } from '@/services/api';
import Helpers from '@/services/auth-helpers';

// FUNCTION

export function* resendOTPSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(resendOTP, materials);

    const resendOTPResponse = response;

    Helpers.storeAccessToken(response?.data?.token || '');
    yield put(resendOTPAction.success(resendOTPResponse));
    successCallback?.(resendOTPResponse);
  } catch (err) {
    console.log(err);
    yield put(resendOTPAction.failure(err));
    failedCallback?.(err);
  }
}
