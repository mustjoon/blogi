import { Container } from '@chakra-ui/react';
import styled, { css } from 'styled-components';

const SharedCss = css`
  && {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    min-height: 100vh;
    padding-bottom: 50px;
  }

  a {
    color: ${({ theme }) => theme.colors.red};
  }

  pre {
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    padding: 10px;
    margin: 50px 0;
    border-radius: 5px;
    // width: 150%;
    // margin-left: -25%;
    overflow: auto;
  }

  hr {
    margin: 40px 0;
  }

  background: ${({ theme }) => theme.colors.backgroundSecondary};

  img {
    width: 100%;
    margin: 50px auto;
  }
`;

export const PostContent = styled.div`
  max-width: 70em;
  margin: 0 auto;
`;

export const BlockPostContainer = styled(Container)`
  ${SharedCss}
`;

export const CheatSheetContainer = styled(Container)`
  ${SharedCss}

  padding: 50px;

  h1,
  h2,
  h3 {
    text-align: left;
    margin-left: 0;
  }

  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1em;
  }
`;
