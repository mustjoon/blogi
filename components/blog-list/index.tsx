import { FunctionComponent, useEffect } from 'react';
import { Grid } from '@chakra-ui/react';
import { BlogTeaser } from 'components/blog-list/blog-teaser';
import { BlockListContainer } from 'components/blog-list/blog-list.sc';

import { typeWriter } from 'utils/translator';

export const IndexPage: FunctionComponent<any> = ({ blogs }) => {
  useEffect(() => {
    typeWriter(2, 1);
  }, []);
  return (
    <BlockListContainer maxW="90em">
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}>
        {blogs.map((blog) => (
          <BlogTeaser key={blog.id} blogPost={blog} />
        ))}
      </Grid>
    </BlockListContainer>
  );
};

export default IndexPage;
