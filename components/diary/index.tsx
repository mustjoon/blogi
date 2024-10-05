import { FunctionComponent } from 'react';
import { Grid } from '@chakra-ui/react';
import { PostContent, CheatSheetContainer } from 'components/diary/diary-styles.sc';
import { mdToHtml } from 'utils/md-to-html';
import Head from 'components/head';

export const Diaries: FunctionComponent<any> = ({ diaries }) => {
  const title = 'Daily diary';
  const description = 'This is a collection of my daily adventures in cyber learning';
  console.log({ diaries });

  return (
    <CheatSheetContainer maxW="90em">
      <Head title={title} description={description} />
      <div
        style={{
          maxWidth: '70em',
          margin: '0 auto',

          padding: '15px',
          marginTop: '20px',
        }}
      >
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <Grid>
        {diaries.map((cheatsheet) => (
          <div
            style={{
              maxWidth: '70em',
              margin: '0 auto',
              backgroundColor: '#313233',
              marginBottom: '20px',
              padding: '15px',
              marginTop: '20px',
            }}
          >
            <h1 style={{ fontSize: '2.5em' }}>{cheatsheet.date}</h1>
            <PostContent key={cheatsheet.id} dangerouslySetInnerHTML={{ __html: mdToHtml(cheatsheet.blogContent) }} />
          </div>
        ))}
      </Grid>
    </CheatSheetContainer>
  );
};

export default Diaries;
