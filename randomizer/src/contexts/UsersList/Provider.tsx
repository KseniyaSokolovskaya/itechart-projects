import React, { useState } from 'react';
import Context from './Context';
import type { IUser, IUserListContext } from './Context';

const Provider: React.FC = ({ children }) => {
  const [userList, setUserList] = useState<IUser[]>([]);
  const [lastStr, setLastStr] = useState('');
  const [listStr, setLisStr] = useState<string[]>([]);

  function changeUserList(user: IUser) {
    setUserList((prev) => [...prev, user]);
    const str = `${user.firstName} ${user.lastName}, ${user.occupation} from ${user.country}`;
    setLastStr(str);
    setLisStr((prev) => [...prev, str]);
  }

  const contextValue: IUserListContext = { userList, lastStr, listStr, changeUserList };
  return <Context.Provider value={contextValue}>{children} </Context.Provider>;
};

export default Provider;
