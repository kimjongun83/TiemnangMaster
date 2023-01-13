import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { getQueryParam, showNotification, validationRules } from '@/utils/functions';
import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import { Link, navigate } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import Button from '@/components/Button';
import { changePasswordAction, EChangePasswordAction } from '@/redux/actions';

import './ChangePassword.scss';
import { ETypeNotification } from '@/common/enums';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const token = getQueryParam('token');

  const changePasswordLoading = useSelector((state) => state.loadingReducer[EChangePasswordAction.CHANGE_PASSWORD]);

  const [, setFormValues] = useState({});

  const { password } = form.getFieldsValue();

  const handleSubmit = (values) => {
    const body = {
      new_password: values.password,
    };

    dispatch(changePasswordAction.request({ token, body }, handleChangePasswordSuccess));
  };

  const handleChangePasswordSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Change password Successfully');
    navigate(`${LayoutPaths.Auth}${Paths.LoginApp}`);
  };

  useEffect(() => {
    if (!token) navigate(`${LayoutPaths.Auth}${Paths.ResetPassword}`);
  }, []);

  return (
    <div className="ChangePassword">
      <AuthForm>
        <div className="ChangePassword-title">Create new password</div>
        <div className="ChangePassword-description">Your new password must be at least 8 characters.</div>
        <Form
          layout="vertical"
          form={form}
          className="ChangePassword-form"
          onValuesChange={(_, values) => setFormValues(values)}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="password"
            rules={[validationRules.required(), validationRules.minLength(5), validationRules.maxLength(60)]}
          >
            <Input
              type="password"
              prefix={<LockOutlined />}
              placeholder="Password (8 characters at least)"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[
              validationRules.required(),
              validationRules.minLength(5),
              validationRules.maxLength(60),
              validationRules.confirmPassword(password),
            ]}
          >
            <Input type="password" prefix={<LockOutlined />} placeholder="Confirm Password" size="large" />
          </Form.Item>

          <div className="ChangePassword-submit">
            <Button title="Reset Password" size="large" htmlType="submit" loading={changePasswordLoading} />
          </div>
        </Form>

        <div className="ChangePassword-description">
          <i>
            You remember your password?{' '}
            <span>
              <Link to={`${LayoutPaths.Auth}${Paths.LoginApp}`}>Sign in</Link>
            </span>
          </i>
        </div>
      </AuthForm>
    </div>
  );
};

export default ChangePassword;
