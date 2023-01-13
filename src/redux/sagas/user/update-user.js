import { call, put } from 'redux-saga/effects';

import { updateUserAction } from '@/redux/actions';
import { updateUser } from '@/services/api';

// FUNCTION

export function* updateUserSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(updateUser, materials);
    const updateUserResponse = response;
    yield put(updateUserAction.success(updateUserResponse));
    successCallback?.(updateUserResponse);
  } catch (err) {
    yield put(updateUserAction.failure(err));
    failedCallback?.(err);
  }
}
