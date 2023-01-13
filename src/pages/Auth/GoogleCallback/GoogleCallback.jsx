import env from '@/env';
import React, { useEffect } from 'react';

const GoogleCallback = () => {
  useEffect(() => {
    window.open(env.rootAppUrl, '_self');
  }, []);

  return <div className="GoogleCallback" />;
};

export default GoogleCallback;
