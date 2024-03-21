import React, { useState, ChangeEvent, FormEvent } from 'react';

type Props = {
  fn: (text: string) => void;
};

export const Form = ({ fn }: Props) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputText(ev.target.value);
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    fn(inputText);
  };

  return (
    <form className='my-form' onSubmit={handleSubmit}>
      <label htmlFor='task-form'>Task description</label>
      <input
        id='task-form'
        type='text'
        value={inputText}
        onChange={handleChange}
      />
      <button type='submit'>Add</button>
    </form>
  );
};
