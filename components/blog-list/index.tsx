import { FunctionComponent, useEffect } from 'react';
import { Grid } from '@chakra-ui/react';
import { BlogTeaser } from 'components/blog-list/blog-teaser';
import { BlockListContainer } from 'components/blog-list/blog-list.sc';
import Head from 'components/head';
import useIsMobile from './use-is-mobile';
import { typeWriter } from 'utils/translator';

export const IndexPage: FunctionComponent<any> = ({ blogs }) => {
  useEffect(() => {
    typeWriter(2, 1);
  }, []);

  const title = 'Zolaboo´s Blog';
  const description = 'My CTF writeups and Cyber stuff';
  const isMobile = useIsMobile();
  return (
    <div>
      <Head title={title} description={description} />
      <BlockListContainer maxW="90em">
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}>
          {blogs.map((blog) => (
            <BlogTeaser isMobile={isMobile} key={blog.id} blogPost={blog} />
          ))}
        </Grid>
      </BlockListContainer>
    </div>
  );
};

export default IndexPage;
