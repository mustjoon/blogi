import { useSelector, useDispatch } from 'react-redux';
import { FunctionComponent, useEffect } from 'react';
import { getBlogList } from 'src/slices/blog';
import { Container, Grid } from '@chakra-ui/react';
import { CenterLoader } from 'src/components/center-loader';
import { BlogTeaser } from 'src/components/blog-teaser';
import { BlockListContainer } from 'src/components/blog-list.sc';
import { BlogCalls } from 'src/api/call-api';

export async function getStaticProps({ query }): Promise<any> {
  const data = await BlogCalls.getAll();

  return {
    props: {
      blogs: data,
    },
    revalidate: 120,
  };
}

export const Movie: FunctionComponent<any> = ({ blogs }) => {
  return (
    <BlockListContainer maxW="90em">
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}>
        {blogs.map((blog) => (
          <BlogTeaser key={blog.id} blogPost={blog} />
        ))}
      </Grid>
    </BlockListContainer>
  );

  /*
  useEffect(() => {
    dispatch(getBlogList());
  }, []);

  if (loading) {
    return <CenterLoader />;
  }
  
 
  return (
    <BlockListContainer maxW="90em">
      <Grid templateColumns="repeat(2, 1fr)">
        {allIds.map((id) => (
          <BlogTeaser key={id} blogPost={byId[id]} />
        ))}
      </Grid>
    </BlockListContainer>
  );
  */
};

export default Movie;
