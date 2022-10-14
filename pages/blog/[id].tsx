import { FunctionComponent } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { BlogCalls } from 'lib/api/call-api';
import SingleBlog from 'components/single-blog/index';

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await BlogCalls.getAll();
  const paths = blogs.map(({ id }) => {
    return {
      params: { id },
    };
  });
  return {
    paths,
    fallback: 'blocking',
  };
};

interface Params {
  params: {
    id: string;
  };
}
export const getStaticProps: GetStaticProps = async ({ params: { id } }: Params) => {
  let data = null;
  try {
    data = await BlogCalls.getSingle({ id });
  } catch (err) {
    console.log('Failed to fetch single blog');
  }

  return {
    props: {
      blog: data,
    },
    revalidate: 120,
  };
};

export const Page: FunctionComponent<any> = (props) => <SingleBlog {...props} />;
export default Page;
