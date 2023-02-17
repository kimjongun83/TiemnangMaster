import React from 'react';
import { Modal as AntdModal } from 'antd';
import classNames from 'classnames';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './Modal.scss';

const Modal = ({
  visible,
  // cancelButton,
  // confirmButton,
  centered,
  width,
  wrapClassName,
  className,
  closeable = true,
  title,
  // hideFooter,
  children,
  onClose,
  // onSubmit,
}) => {
  return (
    <AntdModal
      footer={null}
      title={null}
      closable={false}
      visible={visible}
      width={width}
      centered={centered}
      onCancel={onClose}
      wrapClassName={classNames('Modal-wrapper', wrapClassName)}
      className={classNames('Modal', className)}
    >
      {closeable && (
        <div className="Modal-close" onClick={onClose}>
          <Icon name={EIconName.CloseSquare} color={EIconColor.BLACK} />
        </div>
      )}

      {title && (
        <div className="Modal-header">
          <div className="Modal-title">{title}</div>
        </div>
      )}

      <div className="Modal-body">{children}</div>
    </AntdModal>
  );
};

export default Modal;
