import React from 'react';

import Button from './components/Button';
import Input from './components/Input';
import Textarea from './components/Textarea';

const App: React.FC = () => (
  <div className="app">
    <div className="app__header">
      <Button />
      <Input data="" />
    </div>
    <div className="app__main">
      <Textarea list={[]} />
    </div>
  </div>
);

export default App;
