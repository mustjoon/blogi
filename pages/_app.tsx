import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import _Layout from 'components/layout/layout';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme, device } from 'theme';

import '../styles/globals.scss';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
  }

  @media ${device.laptopL} { 
    body {
      font-size: 0.76vw;
    }
  }

  body *{
    color: white;
    h2 {
      font-size: 3em;
      text-align: center;
      margin: 0.5em
    }
    h3 {
      font-size: 2.5em;
    }
  }
`;

interface MyAppProps extends AppProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: any;
}

export default function MyApp({ Component, pageProps }: MyAppProps): ReactElement {
  const Layout = Component.Layout ? Component.Layout : _Layout;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ThemeProvider>
      <GlobalStyle />
    </Provider>
  );
}
