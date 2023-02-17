import React, { useState } from 'react';
import './Header.scss';
import Input from '@/components/Input';
import fakeDataHeader from './fakeData';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Link, useLocation } from '@reach/router';
import Avatar from '@/components/Avatar';
import ModalAuth from '@/containers/ModalAuth';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '@/redux/actions';
import { EKeyStateModalAuth } from '../ModalAuth/ModalAuth.enum';

const HeaderClient = ({}) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);

  const [modalAuthState, setModalAuthState] = useState({
    visible: false,
  });
  const handleActiveAll = () => {
    setActive(!active);
  };
  const handleToogleMobile = () => {
    setActive(true);
  };
  const handleOpenModalAuth = (defaultKey) => {
    setModalAuthState({ ...modalAuthState, visible: true, defaultKey });
  };

  const handleCloseModalAuth = () => {
    setModalAuthState({ ...modalAuthState, visible: false });

    dispatch(uiActions.toggleModalAuth(false));
  };
  return (
    <>
      <div className="Header-client">
        <div className="Header-client-top">
          <div className="container">
            <div className="Header-client-top-information flex justify-end  ">
              <a href="@/containers/Header/Header" className="Header-client-top-information-contact flex items-center">
                <Icon
                  className="Header-client-top-information-contact-icon"
                  name={EIconName.Phone}
                  color={EIconColor.WHITE}
                />
                Email: admin@admin.com
              </a>
              <a href="@/containers/Header/Header" className="Header-client-top-information-contact flex items-center">
                <Icon
                  className="Header-client-top-information-contact-icon"
                  name={EIconName.Phone}
                  color={EIconColor.WHITE}
                />
                Phone: 1900 1900
              </a>
            </div>
          </div>
        </div>
        <div className="Header-client-middle">
          <div className=" container   ">
            <div className="Header-client-middle-wrapper flex items-center justify-beetween">
              <div className="Header-client-middle-wrapper-logo">
                <a className="Header-client-middle-wrapper-logo-img">
                  <img src="https://tiemnangmaster.com/static/media/logo.3bcf2b9a.png" alt="" />
                </a>
              </div>
              <div className="Header-client-middle-wrapper-search">
                <Input
                  placeholder="Tìm Kiếm"
                  value=""
                  suffix={<Icon name={EIconName.Search} color={EIconColor.BLACK} />}
                />
              </div>
              <div className="Header-client-middle-wrapper-account flex items-center">
                <div className="Header-client-middle-wrapper-account-name">
                  <span onClick={() => handleOpenModalAuth(EKeyStateModalAuth.SIGN_IN)}>đăng nhập / </span>
                  <span onClick={() => handleOpenModalAuth(EKeyStateModalAuth.SIGN_UP)}>đăng ký</span>
                </div>
                <div className="Header-client-middle-wrapper-account-avatar ">
                  <Avatar src={'https://tiemnangmaster.com/static/media/image-avatar-default.d9239c76.svg'} />
                </div>
                <div className="Header-client-middle-wrapper-account-toogle" onClick={handleToogleMobile}>
                  <Icon name={EIconName.Toogle} color={EIconColor.BLACK} />
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
                        getProps={({ isCurrent }) => ({
                          className: isCurrent
                            ? 'Header-client-bottom-wrapper-list-item-link active'
                            : 'Header-client-bottom-wrapper-list-item-link',
                        })}
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
        <div
          className={`${active ? 'Header-client-dropdown active' : 'Header-client-dropdown'}`}
          onClick={handleActiveAll}
        >
          <div className={`${active ? 'Header-client-dropdown-total active' : 'Header-client-dropdown-total'}`}>
            <div className="Header-client-dropdown-total-close">
              <Icon name={EIconName.Close} />
            </div>
            <div className="container">
              <div className="Header-client-dropdown-total-search">
                <Input
                  placeholder="Tìm Kiếm"
                  value=""
                  suffix={<Icon name={EIconName.Search} color={EIconColor.BLACK} />}
                />
              </div>
              <div className="Header-client-dropdown-total-wrapper">
                <div className="Header-client-dropdown-total-wrapper-list">
                  {fakeDataHeader.map((item) => {
                    return (
                      <div className="Header-client-dropdown-total-wrapper-list-item">
                        <Link
                          key={item.key}
                          to={item.link}
                          getProps={({ isCurrent }) => ({
                            className: isCurrent
                              ? 'Header-client-dropdown-total-wrapper-list-item-link active'
                              : 'Header-client-dropdown-total-wrapper-list-item-link',
                          })}
                          onClick={handleActiveAll}
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
        <ModalAuth {...modalAuthState} onClose={handleCloseModalAuth} />
      </div>
    </>
  );
};

export default HeaderClient;
