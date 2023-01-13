import React from 'react';
import { Avatar as AntdAvatar } from 'antd';

import './Avatar.scss';

const Avatar = ({ size, src }) => {
  return <AntdAvatar className="Avatar" size={size} src={src} />;
};

export default Avatar;
