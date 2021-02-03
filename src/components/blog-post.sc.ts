import { Container } from '@chakra-ui/react';
import styled from 'styled-components';

export const BlockPostContainer = styled(Container)`
  && {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    min-height: 100vh;
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

  pre {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
