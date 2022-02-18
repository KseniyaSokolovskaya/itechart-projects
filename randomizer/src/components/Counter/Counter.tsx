import React from 'react';
import useUserListContext from '../../contexts/UsersList';
import './index.scss';

const Counter: React.FC = () => {
  const { counter } = useUserListContext();

  return <div className="counter">Generated {counter} from 10</div>;
};

export default Counter;
