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
  isMobile: boolean;
  index: number;
}

export const BlogTeaser: FunctionComponent<Props> = ({ blogPost, isMobile, index }) => {
  const { title, hero, id, teaser } = blogPost;
  return (
    <Link href={`/blog/${id}`}>
      <BlockTeaserContainer>
        <BlockTeaserContent>
          <h3>{title}</h3>
          <ContentContainer>
            <ImageContainer>
              {hero && !isMobile && (
                <Image
                  priority={index < 8}
                  width="200"
                  height="200"
                  alt="logo"
                  src={'https:' + hero.file.url}
                  title={hero.title}
                />
              )}
              {hero && isMobile && (
                <Image
                  priority={index < 4}
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
