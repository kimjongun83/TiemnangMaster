import React from 'react';
import { Button as AntdButton } from 'antd';
import classNames from 'classnames';
import { navigate } from '@reach/router';

import Icon from '@/components/Icon';

import './Button.scss';

const Button = ({
  className,
  size,
  shadow,
  type = 'primary',
  htmlType,
  title,
  danger,
  reverse,
  shape,
  link,
  disabled,
  target,
  icon,
  loading,
  onClick,
}) => {
  const handleClickButton = () => {
    if (link) {
      if (target) {
        window.open(link, target);
      } else {
        navigate(link);
      }
    } else onClick?.();
  };

  return (
    <div className={classNames('Button', className, { shadow, 'only-icon': !title && icon, reverse })}>
      <AntdButton
        size={size}
        type={type}
        shape={shape}
        icon={icon}
        htmlType={htmlType}
        onClick={handleClickButton}
        danger={danger}
        disabled={disabled}
        loading={loading}
      >
        {title && <span className="Button-title">{title}</span>}
      </AntdButton>
    </div>
  );
};

export default Button;
