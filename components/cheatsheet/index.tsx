import { FunctionComponent } from 'react';
import { Grid } from '@chakra-ui/react';
import { PostContent, CheatSheetContainer } from 'components/single-blog/blog-post.sc';
import { mdToHtml } from 'utils/md-to-html';

export const CheatSheet: FunctionComponent<any> = ({ cheatsheets }) => {
  return (
    <CheatSheetContainer maxW="90em">
      <Grid>
        {cheatsheets.map((cheatsheet) => (
          <PostContent key={cheatsheet.id} dangerouslySetInnerHTML={{ __html: mdToHtml(cheatsheet.content) }} />
        ))}
      </Grid>
    </CheatSheetContainer>
  );
};

export default CheatSheet;
