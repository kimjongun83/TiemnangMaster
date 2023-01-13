import { createReducer } from 'deox';

import { getUsersAction, updateUserAction } from '@/redux/actions';
import { getUsersUpdateState } from './get-users';
import { updateUserUpdateState } from './update-user';

const initialState = {
  getUsersResponse: undefined,
  updateUserResponse: undefined,
};

const UserReducer = createReducer(initialState, (handleAction) => [
  handleAction(getUsersAction.success, getUsersUpdateState),
  handleAction(updateUserAction.success, updateUserUpdateState),
]);

export default UserReducer;
