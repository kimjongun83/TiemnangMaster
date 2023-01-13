import React, { useState } from 'react';
import './Header.scss';
import Input from '@/components/Input';
import fakeDataHeader from './fakeData';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Link, useLocation, navigate } from '@reach/router';
import classNames from 'classnames';
const HeaderClient = ({}) => {
  const [active, setActive] = useState('dropdown-menu-total');
  const [icon, setIcon] = useState('toogle');
  const [activeNav, setActiveNav] = useState(false);
  const handleActiveLink = () => {
    setActiveNav(!activeNav);
  };

  const handleToogleMobile = () => {
    console.log('result', 123);
    if (active === 'dropdown-menu-total') {
      setActive('dropdown-menu-total active');
    } else setActive('dropdown-menu-total');

    if (icon === 'toogle') {
      setIcon('dropdown-menu-close toogle ');
    } else setIcon('toogle');
  };

  return (
    <>
      <div className="Header-client">
        <div className="Header-client-top">
          <div className="container">
            <div className="Header-client-top-infomation ant-row ant-row-end">
              <a href="mailto: admin@admin.com" class="Header-client-top-infomation-contact flex items-center">
                <div class="Header-client-top-infomation-contact-icon Icon flex justify-center items-center">
                  <Icon name={EIconName.Phone} color={EIconColor.WHITE} />
                </div>
                Email: admin@admin.com
              </a>
              <a href="mailto: admin@admin.com" class="Header-client-top-infomation-contact flex items-center">
                <div class="Header-client-top-infomation-contact-icon flex justify-center items-center">
                  <Icon name={EIconName.Phone} color={EIconColor.WHITE} />
                </div>
                Phone: 1900 1900
              </a>
            </div>
          </div>
        </div>
        <div className="Header-client-middle">
          <div className="container">
            <div className="Header-client-middle-information">
              <div className="Header-client-middle-information-logo">
                <img src="https://tiemnangmaster.com/static/media/logo.3bcf2b9a.png" alt="" />
              </div>
              <div className="Header-client-middle-information-search">
                <Input
                  placeholder="Tìm Kiếm"
                  value=""
                  suffix={<Icon name={EIconName.Search} color={EIconColor.BLACK} />}
                />
              </div>
              <div class="Header-client-middle-information-account">
                <div className="account-name">
                  <span>Đăng Nhập /</span>
                  <span>Đăng Ký</span>
                </div>
                <div className="account-avatar">
                  <span class="ant-avatar ant-avatar-circle ant-avatar-image">
                    <img src="https://tiemnangmaster.com/static/media/image-avatar-default.d9239c76.svg" />
                  </span>
                </div>
                <div className="toogle" onClick={handleToogleMobile}>
                  <Icon name={EIconName.Toogle} color={EIconColor.BLACK} />
                </div>
                <div className="dropdown-menu">
                  <div className={`${active} dropdown-menu-total-active  `}>
                    <div className="dropdown-menu-close" onClick={handleToogleMobile}>
                      <Icon name={EIconName.Close} />
                    </div>
                    <div className="container">
                      <div className="dropdown-menu-search">
                        <Input
                          placeholder="Tìm Kiếm"
                          value=""
                          suffix={<Icon name={EIconName.Search} color={EIconColor.BLACK} />}
                        />
                      </div>
                      <div className="dropdown-menu-wrapper">
                        <div className="dropdown-menu-wrapper-list">
                          {fakeDataHeader.map((item) => {
                            return (
                              <div className="dropdown-menu-wrapper-list-item">
                                <Link
                                  key={item.key}
                                  to={item.link}
                                  className="Header-client-bottom-wrapper-list-item-link"
                                  onClick={handleActiveLink}
                                >
                                  {item.title}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Header-client-bottom">
        <div className="container">
          <div className="Header-client-bottom-wrapper">
            <div className="Header-client-bottom-wrapper-list">
              {fakeDataHeader.map((item) => {
                return (
                  <div className="Header-client-bottom-wrapper-list-item">
                    <Link
                      key={item.id}
                      to={item.link}
                      className={`Header-client-bottom-wrapper-list-item-link ${activeNav ? 'active' : ''}`}
                      onClick={handleActiveLink}
                    >
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderClient;
