import { FunctionComponent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
            <ImageContainer>
              {hero && (
                <Image
                  priority={true}
                  width="200"
                  height="200"
                  alt="logo"
                  src={'https:' + hero.file.url}
                  title={hero.title}
                />
              )}
            </ImageContainer>

            <TeaserContainer>{teaser}</TeaserContainer>
          </ContentContainer>
        </BlockTeaserContent>
      </BlockTeaserContainer>
    </Link>
  );
};
