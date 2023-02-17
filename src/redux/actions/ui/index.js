import { createActionCreator } from 'deox';

import { EUIAction } from './constants';

export const uiActions = {
  setDevice: createActionCreator(EUIAction.SET_DEVICE, (resolve) => (deviceWidth) => resolve({ deviceWidth })),
  setAudio: createActionCreator(EUIAction.SET_AUDIO, (resolve) => (data) => resolve({ data })),
  toggleModalAuth: createActionCreator(EUIAction.TOGGLE_MODAL_AUTH, (resolve) => (visible) => resolve({ visible })),
  setMoodsReasons: createActionCreator(EUIAction.SET_MOODS_REASONS, (resolve) => (data) => resolve({ data })),
  setCategories: createActionCreator(EUIAction.SET_CATEGOIRES, (resolve) => (data) => resolve({ data })),
  resetActionStatus: createActionCreator(
    EUIAction.RESET_ACTION_STATUS,
    (resolve) => (actionName) => resolve({ actionName: actionName.replace('_REQUEST', '') }),
  ),
};
