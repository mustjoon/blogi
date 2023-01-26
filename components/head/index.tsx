import NextHead from 'next/head';
import { FunctionComponent } from 'react';

export const Head: FunctionComponent<any> = ({ title, description }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="og:title" content={title} key="title" />
      <meta name="title" content={title} key="title" />
      <meta name="og:description" content={description} key="title" />
      <meta name="description" content={description} key="title" />
      <meta name="description" content={description} />
    </NextHead>
  );
};

export default Head;
