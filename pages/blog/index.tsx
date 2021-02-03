import { useSelector, useDispatch } from 'react-redux';
import { FunctionComponent, useEffect } from 'react';
import { getBlogList } from 'src/slices/blog';
import { Container, Grid } from '@chakra-ui/react';
import { CenterLoader } from 'src/components/center-loader';
import { BlogTeaser } from 'src/components/blog-teaser';
import { BlockListContainer } from 'src/components/blog-list.sc';

export const Movie: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { allIds, byId, loading } = useSelector((state) => state.blog);

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
};

export default Movie;
