import { FunctionComponent } from 'react';
import { Grid } from '@chakra-ui/react';
import { PostContent, CheatSheetContainer } from 'components/single-blog/blog-post.sc';
import { mdToHtml } from 'utils/md-to-html';
import Head from 'components/head';

export const CheatSheet: FunctionComponent<any> = ({ cheatsheets }) => {
  const title = "Zolaboo's CheatSheet";
  const description = 'Misc cheatsheet for various stuff, please dont use this, its not intended to be good';
  return (
    <CheatSheetContainer maxW="90em">
      <Head title={title} description={description} />
      <Grid>
        {cheatsheets.map((cheatsheet) => (
          <PostContent key={cheatsheet.id} dangerouslySetInnerHTML={{ __html: mdToHtml(cheatsheet.content) }} />
        ))}
      </Grid>
    </CheatSheetContainer>
  );
};

export default CheatSheet;
