import { FunctionComponent } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import SingleBlog from 'components/single-blog/index';
import { client } from 'lib/api/contentful-client';
import { handleBlogItem, handleBlogList } from 'lib/api/call-api';

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = handleBlogList(await client.getEntries({ content_type: 'blogPost' }));
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
    data = handleBlogItem(await client.getEntry(id));
  } catch (err) {
    console.log('Failed to fetch single blog');
  }

  return {
    props: {
      blog: data,
    },
    revalidate: 30,
  };
};

export const Page: FunctionComponent<any> = (props) => <SingleBlog {...props} />;
export default Page;
