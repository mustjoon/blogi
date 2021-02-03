import { Spinner } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { CenterLoaderContainer } from './center-loader.sc';

export const CenterLoader: FunctionComponent = () => (
  <CenterLoaderContainer>
    <Spinner></Spinner>
  </CenterLoaderContainer>
);
