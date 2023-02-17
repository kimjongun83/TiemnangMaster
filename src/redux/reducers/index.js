import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import authReducer from './auth';
import userReducer from './user';
import uiReducer from './ui';
import productReducer from './product';
import categoryReducer from './category';
const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  authReducer,
  userReducer,
  uiReducer,
  productReducer,
  categoryReducer,
});

export default rootReducer;
