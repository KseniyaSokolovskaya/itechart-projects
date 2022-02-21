import React, { useState } from 'react';
import Context from './Context';
import { IUserListContext, IUser, IResponseData, IUserProps } from '../../../interfaces';

const Provider: React.FC = ({ children }) => {
  const [userList, setUserList] = useState<IUser[]>([]);
  const [lastStr, setLastStr] = useState('');
  const [listStr, setListStr] = useState<string[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [responseData, setResponseData] = useState<IResponseData>({ users: [], countries: [] });

  async function sendRequest() {
    const requestUsers = fetch('https://rnd-test-api.herokuapp.com/api/v1/persons?count=10');
    const requestCountries = fetch('https://rnd-test-api.herokuapp.com/api/v1/countries?count=10');

    const [usersResult, countriesResult] = await Promise.all([requestUsers, requestCountries]);

    const countries = await countriesResult.json();
    const users = await usersResult.json();

    setResponseData({ users, countries });
  }

  function createFullUser() {
    const user = getRandomUser(responseData.users);
    const country = getRandomCountry(responseData.countries);

    changeUserList({ ...user, country });
  }

  function changeUserList(user: IUser) {
    const str = `${user.firstName} ${user.lastName}, ${user.occupation} from ${user.country}`;

    if (!isDuplicateName(user)) {
      setUserList((prev) => [...prev, user]);
      setLastStr(str);
      setListStr((prev) => [...prev, str]);
      setCounter((prev) => prev + 1);
    } else {
      setLastStr(str);
    }
  }

  function getRandomCountry(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getRandomUser(arr: IUserProps[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function isDuplicateName(user: IUser) {
    return !!userList.find((item: IUser) => item.lastName === user.lastName && item.firstName === user.firstName);
  }

  const contextValue: IUserListContext = {
    userList,
    lastStr,
    listStr,
    counter,
    responseData,
    changeUserList,
    sendRequest,
    createFullUser,
  };
  return <Context.Provider value={contextValue}>{children} </Context.Provider>;
};

export default Provider;
