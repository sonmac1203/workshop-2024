import { useState, FormEvent } from 'react';

type Props = {
  actionWithText: (description: string) => void;
};

export const Form = ({ actionWithText }: Props) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (text.length === 0) {
      return;
    }
    actionWithText(text);
    setText('');
  };

  return (
    <form className='input-form' onSubmit={handleSubmit}>
      <label htmlFor='task-description'>Task description</label>
      <input
        type='text'
        id='task-description'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  );
};
