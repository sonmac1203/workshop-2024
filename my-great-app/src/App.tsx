import { useState } from 'react';

import './App.css';

import { Form } from './components/Form';

type Task = {
  description: string;
};

/*
[1, 2, 3]

4
[1, 2, 3, 6]

1, 2, 3
*/

function App() {
  const [collection, setCollection] = useState<Task[]>([]);

  const anotherFn = (text: string) => {
    setCollection((currentState) => {
      const updatedColletion = [
        ...currentState,
        {
          description: text,
        },
      ];
      return updatedColletion;
    });
    // setCollection([...collection, {
    //   description: text
    // }])
  };

  console.log(collection);

  // function add(a: number, b: number) {
  //   return a + b;
  // }

  // const sfsakjfskafkjahfsajkfh = 1;
  // const sfgdagdsgdgdsgsd = 2;

  // const result = add(sfsakjfskafkjahfsajkfh, sfgdagdsgdgdsgsd);

  return (
    <div className='App'>
      <h1>To-do app</h1>
      <h4>The greatest app ever existed</h4>
      <Form fn={anotherFn} />
      <div>
        {collection.map((c, key) => {
          return <p key={key}>{c.description}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
