import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import { regex } from '@/common/constants';

import { initPasscode } from './Passcode.data';
import './Passcode.scss';

const Passcode = ({ disabled, onChange, onSubmit }) => {
  const [passcode, setPasscode] = useState(initPasscode);

  const inputCodeRef0 = useRef(null);
  const inputCodeRef1 = useRef(null);
  const inputCodeRef2 = useRef(null);
  const inputCodeRef3 = useRef(null);
  const inputCodeRef4 = useRef(null);
  const inputCodeRef5 = useRef(null);

  const inputCodeRef = {
    0: inputCodeRef0,
    1: inputCodeRef1,
    2: inputCodeRef2,
    3: inputCodeRef3,
    4: inputCodeRef4,
    5: inputCodeRef5,
  };

  const handlePressKeyboard = (e, codePosition) => {
    const value = e.key;
    const notAtTheLastPosition = codePosition < Object.keys(passcode).length - 1;
    const notAtTheFirstPosition = codePosition > 0;

    if (regex.numeric.test(value)) {
      setPasscode({ ...passcode, [codePosition]: value });

      if (notAtTheLastPosition) {
        document.getElementById(`inputCode-${codePosition + 1}`)?.focus();
      }
    } else if (value === 'Backspace' && notAtTheFirstPosition) {
      if (passcode[codePosition]) {
        setPasscode({ ...passcode, [codePosition]: '' });
      } else {
        setPasscode({ ...passcode, [codePosition - 1]: '' });
        document.getElementById(`inputCode-${codePosition - 1}`)?.focus();
      }
    }
  };

  useEffect(() => {
    onChange?.(Object.values(passcode).join(''));

    const isFillCodeComplete = Object.values(passcode).every((code) => code);
    if (isFillCodeComplete) {
      const finalPasscode = Object.values(passcode).join('');
      onSubmit?.(finalPasscode);
    }
  }, [passcode]);

  useEffect(() => {
    document.getElementById('inputCode-0')?.focus();
  }, []);

  return (
    <div className="Passcode flex items-center justify-around">
      {Object.keys(passcode).map((key) => (
        <div key={key} className={classNames('Passcode-item', { 'has-value': passcode[+key] })}>
          <input
            className="Passcode-item-input"
            id={`inputCode-${key}`}
            ref={inputCodeRef[+key]}
            value={passcode[+key]}
            onChange={() => {}}
            disabled={disabled}
            onKeyDown={(e) => handlePressKeyboard(e, +key)}
            maxLength={1}
          />
        </div>
      ))}
    </div>
  );
};

export default Passcode;
