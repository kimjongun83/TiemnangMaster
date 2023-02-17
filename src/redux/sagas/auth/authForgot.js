import { call, put } from 'redux-saga/effects';
import { forgotPasswordAction } from '@/redux/actions';
import { forgotPassword } from '@/services/api';

export function* forgotPasswordSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(forgotPassword, materials);
    const forgotPasswordAppResponse = response;

    yield put(forgotPasswordAction.success(forgotPasswordAppResponse));
    successCallback?.(forgotPasswordAppResponse);
  } catch (err) {
    yield put(forgotPasswordAction.failure(err));
    failedCallback?.(err);
  }
}
