import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { EGoogleLoginAction, googleLoginAction } from '@/redux/actions';
import Icon, { EIconName } from '@/components/Icon';

import './GoogleBtn.scss';

const GoogleBtn = () => {
  const dispatch = useDispatch();
  // const googleLoginLoading = useSelector((state) => state.loadingReducer[EGoogleLoginAction.GOOGLE_LOGIN]);

  const handleClick = () => {
    // if (!googleLoginLoading) {
    //   // dispatch(googleLoginAction.request({}, handleGoogleLoginSuccess));
    // }
  };

  const handleGoogleLoginSuccess = (response) => {
    window.open(response.authorization_url, '_self');
  };

  return (
    <div className={classNames('GoogleBtn flex items-center justify-center')} onClick={handleClick}>
      <Icon name={EIconName.Google} />
      <span>Sign in with Google</span>
    </div>
  );
};

export default GoogleBtn;
