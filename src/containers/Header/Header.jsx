import React from 'react';
import { Link } from '@reach/router';
import { Col, Layout, Row } from 'antd';
import { SearchOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import Logo from '@/assets/images/logo.svg';
import { Paths } from '@/pages/routers';
import ImageAvatar from '@/assets/images/image-avatar.png';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';

import './Header.scss';
import { EIconColor } from '@/components/Icon';

const { Header: AntdHeader } = Layout;

const Header = ({}) => {
  return (
    <AntdHeader className="Header">
      <div className="Header-wrapper flex items-center justify-between">
        <Link to={Paths.Home} className="Header-logo flex items-center">
          <img src={Logo} alt="" />
          <span>Let's Metric</span>
        </Link>

        <div className="Header-actions">
          <Row gutter={[24, 12]} align="middle">
            <Col>
              <Button icon={<SearchOutlined color={EIconColor.WHITE} />} type="text" />
            </Col>
            <Col>
              <Button icon={<QuestionCircleOutlined color={EIconColor.WHITE} />} type="text" />
            </Col>
            <Col>
              <div className="Header-account flex items-center">
                <Avatar size={24} src={ImageAvatar} />
                <span>William</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </AntdHeader>
  );
};

export default Header;
