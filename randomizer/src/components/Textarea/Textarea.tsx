import React from 'react';
import useUserListContext from '../../contexts/UsersList';
import './index.scss';

const Textarea: React.FC<{ list: string[] }> = () => {
  const listStr = useUserListContext().listStr.join('\n');
  return <textarea className="textarea" defaultValue={listStr} disabled></textarea>;
};

export default Textarea;
