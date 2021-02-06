import styled from 'styled-components';
import { darken } from 'polished';
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  > div {
    min-height: 50px;
    width: 50%;
  }
`;

export const BlockTeaserContent = styled.div``;

export const BlockTeaserContainer = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.darkRed};
  cursor: pointer;
  margin: 1em;
  border-radius: 5px;
  transition: all 0.1s ease-in-out;
  h3 {
    margin-left: calc(50%);
  }
  &:hover {
    background: ${({ theme }) => darken(0.05, theme.colors.darkRed)};
  }

  ${BlockTeaserContent} {
    //padding: 20px;
    //border: 20px solid ${({ theme }) => theme.colors.backgroundPrimary};
  }

  &:nth-child(4n + 1),
  &:nth-child(4n + 4) {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    &:hover {
      background: ${({ theme }) => darken(0.05, theme.colors.backgroundSecondary)};
    }
    ${BlockTeaserContent} {
      //  border-color: ${({ theme }) => theme.colors.red};
    }

    h3 {
      margin-left: 0;
    }
    ${ContentContainer} {
      flex-direction: row-reverse;
    }
  }

  img {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  margin: 5px;

  &::after {
    content: '';
    display: block;
    padding-bottom: 43%;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TeaserContainer = styled.div`
  margin: 5px;
`;
