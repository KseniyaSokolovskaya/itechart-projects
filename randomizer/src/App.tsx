import React from 'react';
import * as UsersList from './contexts/UsersList';
import Button from './components/Button';
import Input from './components/Input';
import Textarea from './components/Textarea';
import Counter from './components/Counter';

const App: React.FC = () => (
  <UsersList.Provider>
    <div className="app">
      <div className="app__header">
        <Button />
        <Input data="" />
      </div>
      <div className="app__main">
        <Textarea list={[]} />
      </div>
      <Counter />
    </div>
  </UsersList.Provider>
);

export default App;
