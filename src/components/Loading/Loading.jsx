import React from 'react';

import { Spin } from 'antd';

import './Loading.scss';

const Loading = ({ style }) => {
  return (
    <div className="Loading flex items-center justify-center" style={style}>
      <Spin />
    </div>
  );
};

export default Loading;
