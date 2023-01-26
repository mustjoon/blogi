import { FunctionComponent } from 'react';
import ListComponent from 'components/blog-list/index';
import { GetStaticProps } from 'next';
import { getBlogs } from 'lib/api/blog-service';

export const getStaticProps: GetStaticProps = async () => {
  const data = await getBlogs();
  return {
    props: {
      blogs: data,
    },
    revalidate: 30,
  };
};

export const IndexPage: FunctionComponent<any> = (props) => <ListComponent {...props} />;

export default IndexPage;
