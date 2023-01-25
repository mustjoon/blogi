import NextHead from 'next/head';
import { FunctionComponent } from 'react';

export const Head: FunctionComponent<any> = ({ title, description }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta property="title" content={title} key="title" />
      <meta property="og:description" content={description} key="title" />
      <meta property="description" content={description} key="title" />
    </NextHead>
  );
};

export default Head;
