import styled from 'styled-components';
import { darken } from 'polished';
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 30em) {
    flex-direction: column;
  }

  @media (max-width: 30em) {
    align-items: center;
  }
  > div {
    min-height: 50px;
    width: 50%;

    @media (max-width: 30em) {
      font-size: 14px;
      width: 100%;
      min-height: auto;
    }
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
    font-weight: bold;

    @media (max-width: 30em) {
      margin-left: 0;
      font-size: 20px;
    }
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
      // flex-direction: row-reverse;
      @media (max-width: 30em) {
        flex-direction: column;
      }
      //
    }
  }

  img {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 100%;

  margin: 5px;

  width: 50%;

  width: 200px !important;
  height: 200px;

  @media (max-width: 30em) {
    width: 200px !important;
    height: 200px;
  }

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

    @media (max-width: 30em) {
      position: relative;
    }
  }
`;

export const TeaserContainer = styled.div`
  margin: 5px;
`;
