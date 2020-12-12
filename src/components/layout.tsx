import Particles from 'react-particles-js';
import { FunctionComponent } from 'react';

import { config } from 'src/utils/particles-config';
import particle from 'styles/particle.module.scss';

const temp = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    line_linked: {
      enable: true,
      opacity: 0.02,
    },
    move: {
      direction: 'right',
      speed: 0.05,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={particle.particle}>
      <Particles params={config as any} />
      {children}
    </div>
  );
};

export default Layout;
