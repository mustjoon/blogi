import { Container } from '@chakra-ui/react';
import styled from 'styled-components';

export const BlockPostContainer = styled(Container)`
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
    margin: 10px 0;
    border-radius: 5px;
    width: 150%;
    margin-left: -25%;
    overflow: hidden;
  }

  hr {
    margin: 40px 0;
  }

  background: ${({ theme }) => theme.colors.backgroundSecondary};

  img {
    width: 100%;
    margin: 0 auto;
  }
`;

export const PostContent = styled.div`
  max-width: 40em;
  margin: 0 auto;
`;
