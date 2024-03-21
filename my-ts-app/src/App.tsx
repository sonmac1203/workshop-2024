import React, { useState } from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Form } from './components/Form';
import { CollectionList } from './components/CollectionList';

export type Task = {
  description: string;
};

function App() {
  const [collection, setCollection] = useState<Task[]>([]);

  const addTaskToCollection = (description: string): void => {
    setCollection((currState) => {
      const taskToAdd: Task = { description };
      return [...currState, taskToAdd];
    });
  };

  return (
    <div className='App'>
      <Banner title='To-do app' subTitle='The greatest app ever existed' />
      <Form actionWithText={addTaskToCollection} />
      <CollectionList data={collection} />
    </div>
  );
}

export default App;
