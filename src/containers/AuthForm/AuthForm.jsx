import React from 'react';
import { Col, Row } from 'antd';

import Carousels from '@/components/Carousels';
import BgAuthForm from '@/assets/images/bg-auth-form.png';

import { dataAuthFormCarousel } from './AuthForm.data';
import './AuthForm.scss';

const AuthForm = ({ children }) => {
  return (
    <div className="AuthForm">
      <Row>
        <Col span={12}>
          <div className="AuthForm-carousel">
            <div className="AuthForm-carousel-bg">
              <img src={BgAuthForm} alt="" />
            </div>
            <Carousels infinite dots arrows slidesToShow={1} slidesToScroll={1} autoplay>
              {[...dataAuthFormCarousel, ...dataAuthFormCarousel].map((item, index) => (
                <div key={index} className="AuthForm-carousel-item">
                  <div className="AuthForm-carousel-item-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="AuthForm-carousel-item-title">{item.title}</div>
                  <div className="AuthForm-carousel-item-description">{item.description}</div>
                </div>
              ))}
            </Carousels>
          </div>
        </Col>
        <Col span={12}>
          <div className="AuthForm-wrapper flex items-center justify-center">
            <div className="AuthForm-children">{children}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AuthForm;
