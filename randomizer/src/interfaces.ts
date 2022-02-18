export interface IUserProps {
  lastName: string;
  firstName: string;
  age: number;
  gender: string;
  occupation: string;
}

export interface IUser extends IUserProps {
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
