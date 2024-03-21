import React from 'react';

type Props = {
  title: string;
  subTitle: string;
};
export const Banner = ({ title, subTitle }: Props) => {
  return (
    <div className='banner'>
      <h1>{title}</h1>
      <h4>{subTitle}</h4>
    </div>
  );
};
