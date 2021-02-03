import { Container } from '@chakra-ui/react';
import styled from 'styled-components';

export const BlockListContainer = styled(Container)`
  padding: 30px;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
`;
