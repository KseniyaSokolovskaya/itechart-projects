import React from 'react';

export interface IUser {
  lastName: string;
  firstName: string;
  age: number;
  gender: string;
  occupation: string;
  country: string;
}

export interface IUserListContext {
  userList: IUser[];
  lastStr: string;
  listStr: string[];
  counter: number;
  changeUserList: (user: IUser) => void;
}

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
