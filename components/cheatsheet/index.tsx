import { FunctionComponent } from 'react';
import { Grid } from '@chakra-ui/react';
import { PostContent, CheatSheetContainer } from 'components/single-blog/blog-post.sc';
import { mdToHtml } from 'utils/md-to-html';
import Head from 'components/head';

export const CheatSheet: FunctionComponent<any> = ({ cheatsheets }) => {
  const title = 'Cheatsheet';
  const description =
    'Cheatsheet for personal use, no success guaruanteed, you might be better off using  other sources';

  return (
    <CheatSheetContainer maxW="90em">
      <div
        style={{
          maxWidth: '70em',
          margin: '0 auto',

          marginTop: '20px',
          marginBottom: '50px',
        }}
      >
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
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
