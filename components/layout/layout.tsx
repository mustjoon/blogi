import { FunctionComponent } from 'react';
import { Header } from '../header/header';
import { LayoutContainer } from './layout.sc';

export const Layout: FunctionComponent<any> = ({ children }: any) => {
  return (
    <LayoutContainer>
      <Header />
      <div>{children}</div>
    </LayoutContainer>
  );
};

export default Layout;
