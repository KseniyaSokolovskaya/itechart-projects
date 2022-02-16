import React from 'react';
import useUserListContext from '../../contexts/UsersList';

import './index.scss';

const Input: React.FC<{ data: string }> = () => {
  const str = useUserListContext().lastStr;
  return <input className="app__input" type="text" value={str} disabled />;
};

export default Input;
