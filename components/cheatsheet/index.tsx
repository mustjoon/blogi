import { useSelector, useDispatch } from 'react-redux';
import { FunctionComponent, useEffect } from 'react';
import { getAll } from 'redux/slices/cheatSheet';
import { Grid } from '@chakra-ui/react';
import { CenterLoader } from 'components/cheatsheet/center-loader';
import { PostContent, CheatSheetContainer } from 'components/single-blog/blog-post.sc';
import { mdToHtml } from 'utils/md-to-html';

export const CheatSheet: FunctionComponent = () => {
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
      <Grid>
        {allIds.map((id) => (
          <PostContent key={id} dangerouslySetInnerHTML={{ __html: mdToHtml(byId[id].content) }} />
        ))}
      </Grid>
    </CheatSheetContainer>
  );
};

export default CheatSheet;
