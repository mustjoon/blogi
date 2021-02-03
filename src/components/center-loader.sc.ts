import { position } from '@chakra-ui/react';
import { isAbsolute } from 'path';
import styled from 'styled-components';

export const CenterLoaderContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
