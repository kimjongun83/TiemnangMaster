import React from 'react';
import { Layout } from 'antd';

import Header from '@/containers/Header';
import Sidebar from '@/containers/Sidebar';

import './Admin.scss';

const { Content } = Layout;

const Admin = ({ children }) => {
  return (
    <div className="Admin">
      <Layout>
        <Header />
        <Layout>
          <Sidebar />
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Admin;
