import React from 'react';
import { Modal as AntdModal } from 'antd';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './Modal.scss';

export const Modal = ({ visible, onClose, title, btnTitle, disabledSubmit, wrapClassName, onSubmit, children }) => {
  return (
    <AntdModal
      visible={visible}
      wrapClassName={classNames('Modal-wrapper', wrapClassName)}
      onCancel={onClose}
      closable={false}
      footer={false}
    >
      <div className="Modal-close" onClick={onClose}>
        <Icon name={EIconName.Close} color={EIconColor.WHITE} />
      </div>
      <div className="Modal-header flex items-center justify-center">
        <div className="Modal-title">{title}</div>
      </div>
      <div className="Modal-body">{children}</div>
      <div className="Modal-footer">
        <div className={classNames('Modal-submit-btn', { disabled: disabledSubmit })} onClick={onSubmit}>
          {btnTitle}
        </div>
      </div>
    </AntdModal>
  );
};

export default Modal;
