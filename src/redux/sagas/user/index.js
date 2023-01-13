import { all, takeLatest } from 'redux-saga/effects';

import { getUsersAction, updateUserAction } from '@/redux/actions';

import { getUsersSaga } from './get-users';
import { updateUserSaga } from './update-user';

export default function* root() {
  yield all([
    takeLatest(getUsersAction.request.type, getUsersSaga),
    takeLatest(updateUserAction.request.type, updateUserSaga),
  ]);
}
