import { call, put } from 'redux-saga/effects';
import { forgotPasswordResendOTPAction } from '@/redux/actions';
import { forgotPasswordResendOTP } from '@/services/api';

export function* forgotPasswordResendOTPSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(forgotPasswordResendOTP, materials);
    const forgotPasswordResendOTPResponse = response;
    console.log('ForgotPasswordResendOTP REsponse', forgotPasswordResendOTPResponse);
    yield put(forgotPasswordResendOTPAction.success(forgotPasswordResendOTPResponse));
    successCallback?.(forgotPasswordResendOTPResponse);
  } catch (err) {
    yield put(forgotPasswordResendOTPAction.failure(err));
    failedCallback?.(err);
  }
}
