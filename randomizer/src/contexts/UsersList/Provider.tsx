import React, { useState } from 'react';
import Context from './Context';
import type { IUser, IUserListContext } from './Context';

const Provider: React.FC = ({ children }) => {
  const [userList, setUserList] = useState<IUser[]>([]);

  function changeUserList(user: IUser) {
    setUserList((prev) => [...prev, user]);
  }

  const contextValue: IUserListContext = { userList, changeUserList };
  return <Context.Provider value={contextValue}>{children} </Context.Provider>;
};

export default Provider;
