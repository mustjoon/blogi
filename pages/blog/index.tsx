import { FunctionComponent } from 'react';
import { BlogApi } from 'lib/api/call-api';
import ListComponent from 'components/blog-list/index';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const data = await BlogApi.getAll();

  return {
    props: {
      blogs: data,
    },
    revalidate: 120,
  };
};

export const IndexPage: FunctionComponent<any> = (props) => <ListComponent {...props} />;

export default IndexPage;
