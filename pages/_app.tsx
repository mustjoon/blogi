import { Provider } from 'react-redux';
import store from '../src/store';
import _Layout from 'src/components/layout';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '../styles/globals.scss';

const brandColor = '#2d193c;';

const theme = extendTheme({
  colors: {
    brand: {
      100: brandColor,
      200: brandColor,
      300: brandColor,
      400: brandColor,
      500: brandColor,
      600: brandColor,
      700: brandColor,
      800: brandColor,
      900: brandColor,
    },
  },
});

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const Layout = Component.Layout ? Component.Layout : _Layout;
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
