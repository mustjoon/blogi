import { useSelector, useDispatch } from 'react-redux';
import { FunctionComponent, useEffect } from 'react';
import { getAll } from 'src/slices/cheatSheet';
import { Grid } from '@chakra-ui/react';
import { CenterLoader } from 'src/components/center-loader';
import { PostContent, CheatSheetContainer } from 'src/components/blog-post.sc';
import { mdToHtml } from 'src/utils/md-to-html';

export const Movie: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { allIds, byId, loading } = useSelector((state) => state.cheatsheet);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  if (loading) {
    return <CenterLoader />;
  }

  return (
    <CheatSheetContainer maxW="90em">
      <Grid templateColumns="repeat(2, 1fr)">
        {allIds.map((id) => (
          <PostContent key={id} dangerouslySetInnerHTML={{ __html: mdToHtml(byId[id].content) }} />
        ))}
      </Grid>
    </CheatSheetContainer>
  );
};

export default Movie;
