export interface IUserProps {
  lastName: string;
  firstName: string;
  age: number;
  gender: string;
  occupation: string;
}

export interface IResponseData {
  users: IUserProps[];
  countries: string[];
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
  responseData: IResponseData;
  changeUserList: (user: IUser) => void;
  sendRequest: () => void;
  createFullUser: () => void;
}
