import React, { useState } from 'react';
import useUserListContext from '../../contexts/UsersList';
import './index.scss';

interface userProps {
  lastName: string;
  firstName: string;
  age: number;
  gender: string;
  occupation: string;
}

const Button: React.FC = () => {
  const userList = useUserListContext();
  const [, setList] = useState<{ user: userProps; country: string }[]>([]);

  function getRandomCountry(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getRandomUser(arr: userProps[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  async function handleClick() {
    const requestUsers = fetch('https://rnd-test-api.herokuapp.com/api/v1/persons?count=5');
    const requestCountries = fetch('https://rnd-test-api.herokuapp.com/api/v1/countries?count=5');

    const [usersResult, countriesResult] = await Promise.all([requestUsers, requestCountries]);

    const countries = await countriesResult.json();
    const users = await usersResult.json();

    const randomUser = getRandomUser(users);
    const randomCountry = getRandomCountry(countries);
    userList.changeUserList({ ...randomUser, country: randomCountry });

    setList((prev) => [...prev, { user: randomUser, country: randomCountry }]);
  }

  return (
    <button className="btn" onClick={handleClick} disabled={userList.counter === 10}>
      Generate
    </button>
  );
};

export default Button;
