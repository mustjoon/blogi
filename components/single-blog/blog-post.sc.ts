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
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
    font-weight: bold;
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
  width: 100%;

  form {
    color: black;
    input {
      margin: 20px 10px;
      border-radius: 5px;
      padding: 5px 10px;
    }

    button {
      background: ${({ theme }) => theme.colors.black};
      color: white;
      font-weight: bold;
      padding: 10px;
      border-radius: 5px;
    }
  }

  @media (max-width: 30em) {
    padding: 20px 15px;
  }
`;

export const BlockPostContainer = styled(Container)`
  ${SharedCss}
`;

export const CheatSheetContainer = styled(Container)`
  ${SharedCss}

  h1,
  h2,
  h3,h4,h5 {
    text-align: left;
    margin-left: 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 4em;
  }
  h2 {
    font-size: 3.5em;
  }

  h3 {
    font-size: 2.5em;
  }

  h4 {
    font-size: 1.5em;
  }
`;
