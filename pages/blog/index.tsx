import { useSelector, useDispatch } from 'react-redux';
import { FunctionComponent, useEffect } from 'react';
import { getBlogList } from 'src/slices/blog';
import { Container, Grid } from '@chakra-ui/react';
import { CenterLoader } from 'src/components/center-loader';
import { BlogTeaser } from 'src/components/blog-teaser';
import { BlockListContainer } from 'src/components/blog-list.sc';
import { BlogCalls } from 'src/api/call-api';
import { typeWriter } from 'src/utils/translator';

export async function getStaticProps({ query }): Promise<any> {
  const data = await BlogCalls.getAll();

  return {
    props: {
      blogs: data,
    },
    revalidate: 120,
  };
}

export const IndexPage: FunctionComponent<any> = ({ blogs }) => {
  useEffect(() => {
    typeWriter(1, 30);
  }, []);
  return (
    <BlockListContainer maxW="90em">
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}>
        {blogs.map((blog) => (
          <BlogTeaser key={blog.id} blogPost={blog} />
        ))}
      </Grid>
    </BlockListContainer>
  );
};

export default IndexPage;
