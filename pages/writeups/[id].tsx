import { FunctionComponent } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import SingleBlog from 'components/single-blog/index';
import { getBlogs, getBlog } from 'lib/api/blog-service';

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await getBlogs();
  const paths = blogs
    .filter(({ passwordProtected }) => !passwordProtected)
    .map(({ id }) => {
      return {
        params: { id },
      };
    });
  return {
    paths,
    fallback: true,
  };
};

interface Params {
  params: {
    id: string;
  };
}
export const getStaticProps: GetStaticProps = async ({ params: { id } }: Params) => {
  let data = null;
  let error = null;
  try {
    data = await getBlog(id);
  } catch (err) {
    error = err;
    console.log('Failed to fetch single blog');
  }

  return {
    props: {
      blog: data,
      error,
      id,
    },
    revalidate: 30,
  };
};

export const Page: FunctionComponent<any> = (props) => <SingleBlog {...props} />;
export default Page;
