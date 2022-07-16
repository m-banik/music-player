import React from 'react';

type HeadingPropsType = {
  title: string;
};

export const Heading: React.FC<HeadingPropsType> = ({ title }) => {
  return <h1>{title}</h1>;
};
