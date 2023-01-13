import React from 'react';
import classNames from 'classnames';

import { EIconName } from './Icon.enums';
import './Icon.scss';

import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Google from './Google';
import Global from './Global';
import Calendar from './Calendar';
import Phone from './Phone';
import Search from './Search';
import Close from './Close';
import Toogle from './Toogle';

const Icon = ({ name, className, color, onClick }) => {
  const renderIcon = () => {
    switch (name) {
      case EIconName.ArrowLeft:
        return <ArrowLeft color={color} />;
      case EIconName.ArrowRight:
        return <ArrowRight color={color} />;
      case EIconName.Google:
        return <Google color={color} />;
      case EIconName.Global:
        return <Global color={color} />;
      case EIconName.Calendar:
        return <Calendar color={color} />;
      case EIconName.Phone:
        return <Phone color={color} />;
      case EIconName.Search:
        return <Search color={color} />;
      case EIconName.Close:
        return <Close color={color} />;
      case EIconName.Toogle:
        return <Toogle color={color} />;
      default:
        return <></>;
    }
  };

  return (
    <div className={classNames('Icon', 'flex', 'justify-center', 'items-center', className)} onClick={onClick}>
      {renderIcon()}
    </div>
  );
};

export default Icon;
