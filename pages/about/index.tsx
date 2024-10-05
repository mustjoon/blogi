import { FunctionComponent } from 'react';
import { CheatSheetContainer } from 'components/diary/diary-styles.sc';
import Head from 'components/head';
import { Grid } from '@chakra-ui/react';

export const IndexPage: FunctionComponent<any> = (props) => {
  const title = 'About me';
  const description = 'This is a collection of my daily adventures in cyber learning';

  return (
    <CheatSheetContainer maxW="90em">
      <Head title={title} description={description} />
      <Grid>
        <div
          style={{
            maxWidth: '70em',
            margin: '0 auto',

            padding: '15px',
            marginTop: '20px',
          }}
        >
          <h1>{title}</h1>

          <div
            style={{
              marginBottom: '20px',
              maxWidth: '100%',
              minHeight: 200,
              position: 'relative',
              marginBottom: '20px',
            }}
          >
            <img alt="" fill className="logo" src="/logo-second.jpeg" />
          </div>
          <p style={{ marginBottom: '20px' }}>
            I am a full-stack developer with eight years of experience and a strong enthusiasm for cybersecurity. As a
            CTF (Capture The Flag) hobbyist and competitor, I have completed hundreds of challenges across various
            platforms. I also enjoy writing blogs on cybersecurity-related topics. Constantly curious about the unknown,
            I am eager to learn something new every day.
          </p>
          <p>
            <a href="https://github.com/mustjoon">Github profile</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/joonas-mustonen-a82921107/">LinkedIn profile</a>
          </p>
          <p>
            Contact me via email: <a href="mailto:mustjoon@gmail.com">mustjoon@gmail.com</a>
          </p>
        </div>
      </Grid>
    </CheatSheetContainer>
  );
};

export default IndexPage;
