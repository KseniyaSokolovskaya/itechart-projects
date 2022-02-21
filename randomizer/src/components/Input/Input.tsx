import React from 'react';
import useUserListContext from '../../services/contexts/UsersList';
import { DataStr } from './types';

import './index.scss';

const Input: React.FC<DataStr> = () => {
  const { lastStr } = useUserListContext();
  return <input className="app__input" type="text" value={lastStr} disabled />;
};

export default Input;
