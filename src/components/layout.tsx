import { FunctionComponent } from 'react';
import { Header } from './header';
import { LayoutContainer } from './layout.sc';

export const Layout: FunctionComponent<any> = ({ children }: any) => {
  return (
    <LayoutContainer>
      <Header />
      X
      <div>{children}</div>
    </LayoutContainer>
  );
};

export default Layout;
