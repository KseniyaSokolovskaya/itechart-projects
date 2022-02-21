import React from 'react';
import { IUserListContext } from '../../../interfaces';

const defaultUserList = {
  userList: [],
  lastStr: '',
  listStr: [],
  counter: 0,
  responseData: { users: [], countries: [] },
  changeUserList: () => {
    //
  },
  sendRequest: () => {
    //
  },
  createFullUser: () => {
    //
  },
};

const UserListContext = React.createContext<IUserListContext>(defaultUserList);

export default UserListContext;
