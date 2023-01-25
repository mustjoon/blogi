import { FunctionComponent } from 'react';
import Link from 'next/link';

import {
  BlockTeaserContainer,
  ImageContainer,
  ContentContainer,
  BlockTeaserContent,
  TeaserContainer,
} from './blot-teaser.sc';

interface Props {
  blogPost: any;
}

export const BlogTeaser: FunctionComponent<Props> = ({ blogPost }) => {
  const { title, hero, id, teaser } = blogPost;
  return (
    <Link href={`/blog/${id}`}>
      <BlockTeaserContainer>
        <BlockTeaserContent>
          <h3>{title}</h3>
          <ContentContainer>
            <ImageContainer>{hero && <img src={hero.file.url} title={hero.title} />}</ImageContainer>

            <TeaserContainer>{teaser}</TeaserContainer>
          </ContentContainer>
        </BlockTeaserContent>
      </BlockTeaserContainer>
    </Link>
  );
};
