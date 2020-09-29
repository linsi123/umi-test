import React, { useState, useEffect, SyntheticEvent } from 'react';

export const useVisible = initValue => {
  const [visible, setVisible] = useState(initValue);

  const toggle = () => {
    setVisible(!visible);
  };
  return [visible, toggle];
};
