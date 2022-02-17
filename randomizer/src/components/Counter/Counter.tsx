import React from 'react';
import useUserListContext from '../../contexts/UsersList';
import './index.scss';

const Counter: React.FC = () => {
  const count = useUserListContext().counter;

  return <div className="counter">Generated {count} from 10</div>;
};

export default Counter;
