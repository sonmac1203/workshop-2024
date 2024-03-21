import React from 'react';
import { type Task } from '../App';

type Props = {
  data: Task[];
};

export const CollectionList = ({ data }: Props) => {
  if (data.length === 0) {
    return <p>The collection is empty</p>;
  }

  return (
    <div>
      {data.map((item, key) => (
        <p key={key}>{item.description}</p>
      ))}
    </div>
  );
};
