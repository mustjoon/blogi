import Particles from 'react-particles-js';
import { FunctionComponent } from 'react';

import { config } from 'src/utils/particles-config';
import particle from 'styles/particle.module.scss';

export const Layout: FunctionComponent<any> = ({ children }: any) => {
  return (
    <div className={particle.particle}>
      <Particles params={config as any} />
      {children}
    </div>
  );
};

export default Layout;
