import React from 'react';
import { IUserListContext } from '../../../interfaces';

const defaultUserList = {
  userList: [],
  lastStr: '',
  listStr: [],
  counter: 0,
  changeUserList: () => {
    //
  },
};

const UserListContext = React.createContext<IUserListContext>(defaultUserList);

export default UserListContext;
