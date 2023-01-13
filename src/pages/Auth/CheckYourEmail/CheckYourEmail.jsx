import React from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { EResetPasswordAction, resetPasswordAction } from '@/redux/actions';
import AuthForm from '@/containers/AuthForm';
import { Link, useLocation } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import Button from '@/components/Button';

import './CheckYourEmail.scss';

const CheckYourEmail = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const location = useLocation();

  const resetPasswordLoading = useSelector((state) => state.loadingReducer[EResetPasswordAction.RESET_PASSWORD]);

  const handleSubmit = () => {
    const body = { email: location?.state?.email };
    dispatch(resetPasswordAction.request({ body }, () => handleResetPasswordSuccess(body)));
  };

  const handleResetPasswordSuccess = () => {
    showNotification(ETypeNotification.INFO, 'Request Successfully. Please check your mailbox.');
  };

  return (
    <div className="CheckYourEmail">
      <AuthForm>
        <div className="CheckYourEmail-title">Check your email</div>
        <div className="CheckYourEmail-description">We’ve sent a password recover instructions to your email.</div>
        <Form layout="vertical" form={form} className="CheckYourEmail-form">
          <div className="CheckYourEmail-submit">
            <Button
              title="Open email"
              size="large"
              htmlType="submit"
              link="https://mail.google.com/mail/u/0/#search/omega"
              target="_blank"
            />
          </div>
        </Form>
        <div className="CheckYourEmail-description">
          <Link to={`${LayoutPaths.Auth}${Paths.LoginApp}`}>
            <u>Skip, I'll confirm later</u>
          </Link>
        </div>

        <div className="CheckYourEmail-description">
          <i>
            Did not receive the email?
            {` `}
            <u
              className="cursor-pointer"
              onClick={() => {
                !resetPasswordLoading && handleSubmit();
              }}
            >
              Please resend
            </u>
            .
          </i>
        </div>
      </AuthForm>
    </div>
  );
};

export default CheckYourEmail;
