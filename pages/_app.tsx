import { Provider } from 'react-redux';
import store from '../src/store';
import _Layout from 'src/components/layout';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme } from 'src/theme';

import '../styles/globals.scss';

const GlobalStyle = createGlobalStyle`

  body {
    font-size: 0.65vw;
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
 
  }
 
`;

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
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

export default MyApp;
