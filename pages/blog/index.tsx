import { FunctionComponent } from 'react';
import ListComponent from 'components/blog-list/index';
import { GetStaticProps } from 'next';
import { client } from 'lib/api/contentful-client';
import { handleBlogList } from 'lib/api/call-api';

export const getStaticProps: GetStaticProps = async () => {
  const data = handleBlogList(await client.getEntries({ content_type: 'blogPost', order: '-sys.createdAt' }));
  return {
    props: {
      blogs: data,
    },
    revalidate: 30,
  };
};

export const IndexPage: FunctionComponent<any> = (props) => <ListComponent {...props} />;

export default IndexPage;
