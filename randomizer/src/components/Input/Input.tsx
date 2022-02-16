import React from 'react';

import './index.scss';

const Input: React.FC<{ data: string }> = ({ data }) => {
  return <input className="app__input" type="text" value={data} disabled />;
};

export default Input;
