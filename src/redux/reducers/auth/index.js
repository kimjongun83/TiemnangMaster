import { createReducer } from 'deox';

import { registerAction } from '@/redux/actions';
import { registerUpdateState } from './register';

import { loginAction } from '@/redux/actions';
import { loginUpdateState } from './login';

const initialState = {
  changePasswordResponse: undefined,
  googleLoginResponse: undefined,
  loginResponse: undefined,
  registerResponse: undefined,
  verifyResponse: undefined,
  resetPasswordResponse: undefined,
};

const AuthReducer = createReducer(initialState, (handleAction) => [
  handleAction(registerAction.success, registerUpdateState),
  handleAction(loginAction.success, loginUpdateState),
]);

export default AuthReducer;
