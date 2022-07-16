import React from 'react';
import './styles.css';

type SongsPropsType = {
  children: NonNullable<React.ReactNode>;
};

export const Songs: React.FC<SongsPropsType> = ({ children }) => {
  return <section className={'Songs'}>{children}</section>;
};
