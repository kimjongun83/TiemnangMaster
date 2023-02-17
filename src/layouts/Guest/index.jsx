import React from 'react';

import './Guest.scss';
import HeaderClient from '@/containers/Header';
import FooterClient from '@/containers/Footer';

const Guest = ({ children }) => {
  return (
    <div className="Guest">
      <HeaderClient />
      {children}
      <FooterClient />
    </div>
  );
};

export default Guest;
