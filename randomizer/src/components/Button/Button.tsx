import React, { useRef } from 'react';
import useUserListContext from '../../services/contexts/UsersList';
import './index.scss';

const Button: React.FC = () => {
  const userList = useUserListContext();
  const countClick = useRef(0);

  async function handleClick() {
    countClick.current++;

    if (countClick.current === 1) {
      userList.sendRequest();
    }

    if (countClick.current > 1) {
      userList.createFullUser();
    }
  }

  return (
    <button className="btn" onClick={handleClick}>
      Generate
    </button>
  );
};

export default Button;
