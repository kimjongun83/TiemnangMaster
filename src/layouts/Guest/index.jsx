import React from 'react';

import './Guest.scss';
import HeaderClient from '@/containers/Client/Header';
import FooterClient from '@/containers/Client/Footer';

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
