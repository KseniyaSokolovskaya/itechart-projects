import React, { useState, useMemo } from 'react';
import Context from './Context';
import type { IUser, IUserListContext } from './Context';

const Provider: React.FC = ({ children }) => {
  const [userList, setUserList] = useState<IUser[]>([]);
  const [lastStr, setLastStr] = useState('');
  const [listStr, setLisStr] = useState<string[]>([]);


  function isDuplicateName(user: IUser) {
    return !!userList.find((item: IUser) => item.lastName === user.lastName && item.firstName === user.firstName);
  }

  function changeUserList(user: IUser) {
    if (!isDuplicateName(user)) {
      setUserList((prev) => [...prev, user]);

      const str = `${user.firstName} ${user.lastName}, ${user.occupation} from ${user.country}`;

      setLastStr(str);
      setLisStr((prev) => [...prev, str]);
    }
  }

  const contextValue: IUserListContext = { userList, lastStr, listStr, changeUserList };
  return <Context.Provider value={contextValue}>{children} </Context.Provider>;
};

export default Provider;
