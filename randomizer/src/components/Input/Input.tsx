import React from 'react';
import useUserListContext from '../../contexts/UsersList';

import './index.scss';

const Input: React.FC<{ data: string }> = () => {
  const { lastStr } = useUserListContext();
  return <input className="app__input" type="text" value={lastStr} disabled />;
};

export default Input;
