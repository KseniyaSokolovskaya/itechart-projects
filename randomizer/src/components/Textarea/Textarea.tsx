import React from 'react';

import './index.scss';

const Textarea: React.FC<{ list: string[] }> = ({ list }) => {
  return <textarea defaultValue={list.join()} disabled></textarea>;
};

export default Textarea;
